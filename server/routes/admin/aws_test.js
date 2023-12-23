import aws from 'aws-sdk';
import fs from "fs";
import path from "path";

// Configure AWS with your credentials and region
aws.config.update({
  accessKeyId: 'AKIAT3ZGAHLZWCVYH37H',
  secretAccessKey: 'yG/tJB2j2bewC+MaXyXTZgzw4VngRVrDswoKu3xc',
  region: 'ap-south-1',
});

// Create an S3 instance
const s3 = new aws.S3();

// Specify your S3 bucket name
const bucketName = 'flora-care';

// Specify the local directory path containing the files to upload
const localDirectoryPath = '../../uploads';

// Function to upload a file to S3
const uploadFile = async (filePath) => {
  const fileContent = fs.readFileSync(filePath);
  const fileName = path.basename(filePath);

  const params = {
    Bucket: bucketName,
    Key: fileName,
    Body: fileContent,
  };

  try {
    await s3.upload(params).promise();
    console.log(`File uploaded successfully: ${fileName}`);
  } catch (error) {
    console.error(`Error uploading file ${fileName}:`, error);
  }
};

// Function to upload all files in the local directory
const uploadAllFiles = async (directoryPath) => {
  const files = fs.readdirSync(directoryPath);

  for (const file of files) {
    const filePath = path.join(directoryPath, file);
    await uploadFile(filePath);
  }
};

// Upload all files in the specified local directory to the S3 bucket
uploadAllFiles(localDirectoryPath);