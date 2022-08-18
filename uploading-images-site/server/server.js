const vision = require("@google-cloud/vision");

const client = new vision.ImageAnnotatorClient({
  keyFilename: "./PUT JSON FILE IN HERE",
});

client
  .labelDetection("../uploaded-files/example-picture")
  .then((results) => {
    const labels = results[0].labelAnnotations;

    console.log("Labels:");
    labels.forEach((label) => console.log(label))
    
    //   if (
    //     label.description.toLocaleLowerCase() == "van" ||
    //     "ute" ||
    //     "sedan" ||
    //     "coupe" ||
    //     "wagon" ||
    //     "roadster"
    //   ) {
        
        // console.log(label.description.findIndex());
    //   }
    // });
  })
  .catch((err) => {
    console.error("ERROR:", err);
  });

// const projectId = "mission2carproject";
// const location = "us-central1";
// const modelId = "ICN7068277569367310336";
// const filePath = "../public/underpressure.co.nz+landscape+2.jpeg";

// // Imports the Google Cloud AutoML library
// const { PredictionServiceClient } = require("@google-cloud/automl").v1;
// const fs = require("fs");

// // Instantiates a client
// const client = new PredictionServiceClient({
//   keyFilename: "./mission2carproject-680a08de6642.json",
// });

// // Read the file content for translation.
// const content = fs.readFileSync(filePath);

// async function predict() {
//   // Construct request
//   // params is additional domain-specific parameters.
//   // score_threshold is used to filter the result
//   const request = {
//     name: client.modelPath(projectId, location, modelId),
//     payload: {
//       image: {
//         imageBytes: content,
//       },
//     },
//     params: {
//       score_threshold: "0.8",
//     },
//   };

//   const [response] = await client.predict(request);

//   for (const annotationPayload of response.payload) {
//     console.log(`Predicted class name: ${annotationPayload.displayName}`);
//     console.log(
//       `Predicted class score: ${annotationPayload.imageObjectDetection.score}`
//     );
//     console.log("Normalized vertices:");
//     for (const vertex of annotationPayload.imageObjectDetection.boundingBox
//       .normalizedVertices) {
//       console.log(`\tX: ${vertex.x}, Y: ${vertex.y}`);
//     }
//   }
// }

// predict();
