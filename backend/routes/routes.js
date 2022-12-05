const express = require("express");
const router = express.Router();
const testTemplateCopy = require("../models/testModels");

router.post("/post", (request, response) => {
  const data = new testTemplateCopy({
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
  testTemplateCopy.find({}, (error, data) => {
    if (error) {
      response.json(error);
    } else {
      response.json(data);
    }
  });
});

router.delete("/delete/:id", (request, response) => {
  testTemplateCopy.findByIdAndDelete(request.params.id, (error, data) => {
    if (error) {
      response.json(error);
    } else {
      response.json(data);
    }
  });
});

router.put("/put/:id", (request, response) => {
  testTemplateCopy.findByIdAndUpdate(
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
