//used for database

// // Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
// const handler = async (event) => {
//   try {
//     console.log("Payment Success",JSON.stringify(event.body))
//     return {
//       statusCode: 200,
//       body: JSON.stringify({ message: "Calling webhook function" }),
//       // // more keys you can return:
//       // headers: { "headerName": "headerValue", ... },
//       // isBase64Encoded: true,
//     }
//   } catch (error) {
//     return { statusCode: 500, body: error.toString() }
//   }
// }

// module.exports = { handler }
