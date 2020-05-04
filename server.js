// loosely based on https://github.com/fullstackreact/food-lookup-demo

const express = require(`express`);
const path = require(`path`);
const mongojs = require(`mongojs`);
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === `production`) {
  app.use(express.static(`client/build`));
}

const dbName = `penpals`;
const collections = [`userinfo`];
const db = mongojs(dbName, collections);

db.on(`error`, (error) => {
  console.log(`database error: `, error);
});

// Define API routes here

app.post(`/submit`, (req, res) => {
  console.log(req.body);
  db.userinfo.insertOne(req.body, (error, data) => {
    if (error) {
      res.send(error);
    } else {
      res.send(data);
    }
  });
});

app.get(`/find/:id`, (req, res) => {
  db.userinfo.findOne(
    {
      _id: mongojs.objectId(req.params.id),
    },
    (error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.send(data);
      }
    }
  );
});

app.post(`/update/:id`, (req, res) => {
  db.userinfo.updateOne(
    {
      _id: mongojs.objectId(req.params.id),
    },
    {
      $set: {
        name: req.body.name,
        info: req.body.info,
        link: req.body.link,
        inquiry: req.body.inquiry,
      },
    },
    (error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.send(data);
      }
    }
  );
});

app.delete(`/delete/:id`, (req, res) => {
  db.userinfo.remove(
    {
      _id: mongojs.objectId(req.params.id),
    },
    (error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.send(data);
      }
    }
  );
});
// Send every other request to the React app
// Define any API routes before this runs
app.get(`*`, (req, res) => {
  res.sendFile(path.join(__dirname, `./client/build/index.html`));
});

app.listen(PORT, () => {
  console.log(`API server up on http://localhost:${PORT}`);
});
