const { Octokit } = require("octokit");

const octokit = new Octokit({
  auth: "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",
});

async function createFile() {
  try {
    const response = await octokit.rest.repos.createOrUpdateFileContents({
      owner: 'tinendrakumar',
      repo: 'Kandula-SaiTinendraKumar_hw3_secondPhaseOfApp',
      path: 'data/data.json', // The file path you want to create in your repo
      message: 'Adding user data',
      content: Buffer.from(JSON.stringify(yourFormData)).toString('base64'),
    });

    console.log('File created:', response.data);
  } catch (error) {
    console.error('Error creating file:', error);
  }
}

createFile();
