const express = require("express");
const router = express.Router();
const TemplateCopy = require("../models/Models");

// Routes pour ajouter, supprimer, modifier et afficher les données de la base de données

router.post("/post", (request, response) => {
  const data = new TemplateCopy({
    duree: request.body.duree,
  });

  data
    .save()
    .then((data) => {
      response.json(data);
    })
    .catch((error) => {
      response.json(error);
    });
});

router.get("/get", (request, response) => {
  TemplateCopy.find({}, (error, data) => {
    if (error) {
      response.json(error);
    } else {
      response.json(data);
    }
  });
});

router.delete("/delete/:id", (request, response) => {
  TemplateCopy.findByIdAndDelete(request.params.id, (error, data) => {
    if (error) {
      response.json(error);
    } else {
      response.json(data);
    }
  });
});

router.put("/put/:id", (request, response) => {
  TemplateCopy.findByIdAndUpdate(
    request.params.id,
    {
      duree: request.body.duree,
    },
    (error, data) => {
      if (error) {
        response.json(error);
      } else {
        response.json(data);
      }
    }
  );
});

module.exports = router;
