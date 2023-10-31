const express = require('express');
const { Octokit } = require("@octokit/rest");

const app = express();
const octokit = new Octokit({
  auth: "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" // Replace with your personal access token
});

app.use(express.json());

app.post('/submitFormData', async (req, res) => {
  try {
    const formData = req.body; // Form data from client

    // Creating a file in the repository
    const response = await octokit.repos.createOrUpdateFileContents({
      owner: 'tinendrakumar',
      repo: 'Kandula-SaiTinendraKumar_hw3_secondPhaseOfApp',
      path: 'data/data.json', // File path in your repo
      message: 'Adding user data',
      content: Buffer.from(JSON.stringify(formData)).toString('base64')
    });

    res.send('Form data saved to GitHub successfully!');
  } catch (error) {
    res.status(500).send('Error saving data to GitHub');
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
