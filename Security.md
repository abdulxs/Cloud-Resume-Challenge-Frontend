Steps taken to secure the software supply chain

**A. Addition of gpg key to enable commit signing**

1. Downloaded GPG Suite
2. Opened vs code terminal and in the directory of the local repository
3. Ran the commands `gpg --version` just to verify I had installed GPG
4. then `gpg --full-generate-key` to create a new key pair
5. Followed the prompt to select `RSA and RSA (default)`, 4096 keysize, desired validity period, name, email and comments
6. After key was generated, I configured it on git with `git config --global user.signingkey $(RSA key ID here)`
7. Enabled signed gpg commits with `git config --global commit.gpgsign true`
8. Enabled commit signing with GPG from vs code by going to `settings > gpg > Git: enable commit signing`
9. Add public GPG Key to Github profile
10. Test with commit from local and validate from pull request that the `verified` tag is added
11. ![image](https://github.com/abdulxs/Cloud-Resume-Challenge-Frontend/assets/18741380/eb85e272-dd20-4ed7-b7c7-e55d20a6e54a)

**B. Implementing status checks to ensure only signed commits are merged into repository**

1. Make the main branch a protected branch
2. Under settings > Branches > Add branch protection rule
3. Configure `require signed commits`
4. Configure `require status checks`
5. Save settings
   
**C. Set up automated code scanning using GitHub’s CodeQL code analysis tool on GitHub Actions.**

1.  Under Security > code scanning > configure scanning tool
2.  Validated the settings and enabled CodeQL
3.  ![image](https://github.com/abdulxs/Cloud-Resume-Challenge-Frontend/assets/18741380/8c363d27-71d0-4576-93ae-60db99f28e6b)

**D. Generate an SBOM (Software Bill of Materials)**

1. Install Syft on MacOs `curl -sSfL https://raw.githubusercontent.com/anchore/syft/main/install.sh | sh -s -- -b /usr/local/bin` then `brew install syft`
2. generate an SBOM from my source directory `syft path/to/dir -o syft-json`


D. Configure code-signing into Infrastructure as Code definition for API in AWS Lambda

1. create signing profile on AWS Code Signer
2. Start signing job
3. Add code-sign ARN to Repository secrets
4. Declare code-sign resource in AWS SAM template and parametrize the ARN
5. Reference repository secret for Code-sign ARN in Workflow file in the SAM build step
6. Confirm code-signing is present on AWS Lambda via comnsole or CLI 

