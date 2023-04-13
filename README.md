# Kittens

Exercice de création d'un site de chat pour l'introduction à nodeJS avec EJS pour le front. Apprentisages des formulaires, des routes, des controlleurs nodeJS.

# Lancer le programme

Rendez vous sur le dossier KITTENS, lancez un "npm i" et vous n'aurez plus qu'à lancer "npm start".








#### For the new user

These are almost the same steps as for creating a cluster.
This section therefore mainly repeats the steps presented at the beginning.

##### Install the AWS Command Line Interface
https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html
###### On Linux

First of all, you will need to install the AWS Command Line Interface (awscli).\
First you need to install curl
```
Sudo snap install curl
```
Download the installation file 
```
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
```
Unzip the installer
```
unzip -u awscliv2.zip
```
Run the install program with sudo
```
sudo ./aws/install
```
check the version (you need V2)
```
aws –version 
```
###### On MacOS using Homebrew

```
brew install awscli
```

##### Connect to your AWS account

Set it with
```
aws configure
```
Now, you will be invited to enter 4 informations : 
* AWS Access Key ID : Type it and tap Enter
* AWS Secret Access Key : Type it and tap Enter
* Default region name : type eu-west-3 and tap Enter
* Default output : Leave it blank and tap Enter

You are done ! Let's move to the next step.

##### Install the EKS Command Line Interface

EKS stands for Elastic Kubernetes Service. To create a cluster on AWS, we will need to install the EKS Command Line Interface (eksctl) to communicate with AWS EKS.
https://docs.aws.amazon.com/eks/latest/userguide/eksctl.html
For Linux:
Download and extract the latest release of eksctl
```
curl --silent --location "https://github.com/weaveworks/eksctl/releases/latest/download/eksctl_$(uname -s)_amd64.tar.gz" | tar xz -C /tmp
```
Move the extracted binary to /usr/local/bin
```
sudo mv /tmp/eksctl /usr/local/bin
```
Test that your installation was successful 
```
eksctl version
```

##### Install the Kubernetes command-line tool

The Kubernetes command-line tool is essential to communicate with your cluster.
You can install from [here](https://kubernetes.io/fr/docs/tasks/tools/install-kubectl/)
Below you can find the instructions for Linux & Mac.
https://kubernetes.io/docs/tasks/tools/

###### Download

For Linux:
Download the latest release
```
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
```
Download the kubectl checksum file:
```
curl -LO "https://dl.k8s.io/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl.sha256"
```
Validate the kubectl binary against the checksum file:
```
echo "$(cat kubectl.sha256)  kubectl" | sha256sum --check
```
If valid, the output is:
```
kubectl: OK
```

Install kubectl
```
sudo install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl 
```
Test that your installation was successful 
```
kubectl version --client
```

For Mac:
```
curl -LO https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/darwin/amd64/kubectl
```

###### Install

```
chmod +x ./kubectl
sudo mv ./kubectl /usr/local/bin/kubectl
```

##### Update your kubeconfig to get access to the cluster

```
aws eks --region eu-west-3 update-kubeconfig --name vyte-dev
```


### Access the database from your computer

#### Expose the MongoDb to your computer

Run the following command to forward a local port to the port of the `mongo-svc` :

```
kubectl port-forward svc/mongo-svc 27017:27017
```

#### Install a GUI client to access the database

Install a GUI Client like [MongoDB Compass](https://www.mongodb.com/products/compass).

Use `localhost` as host, `27017` as port and the mongoURI in the *overlays/dev2/env* file.
