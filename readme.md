-----------------------------------------------------------------------
MAC SETUP:
-----------------------------------------------------------------------
1 - Create a project directory

2 - Download the app and unpackage it in the project directory 
	( https://wpc.share.gm.com/development/Notebooks/Forms/AllItems.aspx?RootFolder=%2Fdevelopment%2FNotebooks%2FTool%20for%20the%20Tools&FolderCTID=0x0120003EEA3BE13CC7954ABDFCDA2102BB6E61&View=%7B5A07D9A3-3FCF-4F30-807C-EAD04A79732E%7D )

3  - cat "export http_proxy=http://naproxy.gm.com:80/" >> ~/.bash_profile
   - cat "export https_proxy=http://naproxy.gm.com:80/" >> ~/.bash_profile
   - source ~/.bash_profile

4 - Install Homebrew (http://brew.sh/)
	- /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)

5 - Install Node.js (https://nodejs.org/en/) - Version 4.4.5
	- Node will install NPM automatically
	- node -v 4.4+

6 - Set npm proxy settings in .bash_profile (not on win7)
	- npm config set proxy http://naproxy.gm.com:80/
	- npm config set https-proxy http://naproxy.gm.com:80/

7 - Install gulp globally
	- sudo npm install -g gulp 

8 - npm install (from root directory of project)

9 - gulp help (from root directory of project) for further instructions


-----------------------------------------------------------------------
WINDOWS SETUP:
-----------------------------------------------------------------------
1 - Create a project directory

2 - Download the app and unpackage it in the project directory 
	( https://wpc.share.gm.com/development/Notebooks/Forms/AllItems.aspx?RootFolder=%2Fdevelopment%2FNotebooks%2FTool%20for%20the%20Tools&FolderCTID=0x0120003EEA3BE13CC7954ABDFCDA2102BB6E61&View=%7B5A07D9A3-3FCF-4F30-807C-EAD04A79732E%7D )

3 - Install Node.js (https://nodejs.org/en/) - Version 4.4.5
	- Node will install NPM automatically
	- Bring up command console with admin rights. (Right click > Run as admin)
	- node -v 4.4+

4 - Install gulp globally
	- npm install -g gulp

5 - Set npm proxy settings in .bashrc
	- npm config set proxy http://naproxy.gm.com:80/
	- npm config set https-proxy http://naproxy.gm.com:80/	

6 - npm install from root directory of project

7 - gulp demo --demo from root directory of project



-----------------------------------------------------------------------
ANGULAR STYLEGUIDES:
-----------------------------------------------------------------------
https://google.github.io/styleguide/javascriptguide.xml
https://github.com/toddmotto/angular-styleguide
https://github.com/johnpapa/angular-styleguide