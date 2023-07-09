import AWS from 'aws-sdk';

AWS.config.update({
  accessKeyId: 'AKIA537KQDENK2Y3DB6X',
  secretAccessKey: 'GP02Sp+YzjUpwkzkM/TXJ3j1Q7r06JRJZP5oOB9a',
  region: 'ap-southeast-1'
});

export default AWS;

// import AWS from 'aws-sdk';

// // Configure AWS SDK with your credentials and region
// AWS.config.update({
//   accessKeyId: "AKIA537KQDENK2Y3DB6X",
//   secretAccessKey: "GP02Sp+YzjUpwkzkM/TXJ3j1Q7r06JRJZP5oOB9a",
//   region: "Asia Pacific (Singapore) ap-southeast-1",
// });

// Create an S3 instance
// export const s3 = new AWS.S3();

// // Define your bucket name
// export const bucketName = "new-bucket13";

// export default AWS;

// Export the s3 and bucketName variables
// export { s3, bucketName };
