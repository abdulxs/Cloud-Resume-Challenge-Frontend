Steps taken to secure the software supply chain
Addition of gpg key to enable commit signing

1. Downloaded GPG Suite
2. Opened vs code terminal and in the directory of the local repository
3. Ran the commands `gpg --version` just to verify I had installed GPG
4. then `gpg --full-generate-key` to create a new key pair
5. Followed the prompt to select `RSA and RSA (default)`, 4096 keysize, desired validity period, name, email and comments
6. After key was generated, I configured it on git with `git config --global user.signingkey $(RSA key ID here)`
7. Enabled signed gpg commits with `git config --global commit.gpgsign true`
