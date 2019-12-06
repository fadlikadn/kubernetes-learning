Pilihan research :
1. AWS EKS(Elastic Kubernetes Service)
2. AWS Cloud Formation
3. Kubernetes Deployment

Cover :
1. Power of Kubernetes
2. Kubernetes's Powerful Abstractions - Pods and Services
3. Production-Ready Kubernetes Cluster on AWS
4. Deploy and Manage your own applications

Title Map :
Lesson 1 : Google Infrastructur for the Rest of Us
LEsson 2 : Start your engines
LEsson 3 : Reach for the cloud
LEsson 4 : Managing change in your applications
LEsson 5 : Managing complex applications with Helm
Lesson 6 : Planning for Production
Lesson 7 : A production-ready cluster
Lesson 8 : Sorry My App Ate the cluster
Lesson 9 : Storing State
Lesson 10 : Managing Container Images

Topic A : Your own Kubernetes
Topic B : Launching simple kubernetes using minikube

Install kubectl : `choco install kubernetes-cli`
Install minikube: `choco install minikube`
Install docker: done

get minikube version : `minikube version`
Start minikube : `minikube start`
Start minikube on Windows: `minikube start --vm-driver hyperv`
If error, run powershell with admin access, run ` Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V -All`, then run minikube start again

Run minikube dashboard : `minikube dashboard`
Run Kubectl proxy : `kubectl proxy`
Get Pods Name : `kubectl get pods -o go-template --template '{{range .items}}{{.metadata.name}}{{"\n"}}{{end}}'` (using bash)
Get Spefic Pod Port : `kubectl get services/kubernetes-bootcamp -o go-template='{{(index .spec.ports 0).nodePort}}'`
Get Pods Logs : `kubectl logs {pods-name}`, e.g : `kubectl logs kubernetes-bootcamp-69fbc6f4cf-r9gbn`
Executing command on the container : `kubectl exec $POD_NAME env`, e.g : `kubectl exec -ti hello-node-7676b5fb8d-vssn4 bash`

Get Nodes : `kubectl get nodes`
Get Nodes wide display : `kubectl get nodes -o wide`
Get Detail Description of Nodes : `kubectl describe nodes`

## Service
Get current service from our cluster : `kubectl get services`
Create service and expose to external traffic : `kubectl expose deployment/kubernetes-bootcamp --type="NodePort" --port 8080`
Describe running service: `kubectl describe services/kubernetes-bootcamp`
Get Node Port to access service : `export NODE_PORT=$(kubectl get services/kubernetes-bootcamp -o go-template='{{(index .spec.ports 0).nodePort}}')` and `echo NODE_PORT=$NODE_PORT`
Test service port : `curl $(minikube ip):$NODE_PORT`, (access Nodes Minikube IP)
check minikube port: `kubectl get nodes -o wide`

## Scaling
### Scale up
- list the deployments : `kubectl get deployments`
- scale the deployment for 4 replicas (sample) : `kubectl scale deployments/kubernetes-bootcamp --replicas=4`
- list the deployments again
- check number of pods change: `kubectl get pods -o wide`
- check description of deployment: `kubectl describe deployments/kubernetes-bootcamp`
- try to hit port

### Scale Down
- change the deployment to 2 replicas (sample): `kubectl scale deployments/kubernetes-bootcamp --replicas=2`
- check the deployments : `kubectl get deployments`
- check the pods : `kubectl get pods -o wide`

## Rolling Update Zero Downtime
### Update Version
- get deployments: `kubectl get deployments -o wide`
- get pods : `kubectl get pods -o wide`
- update app's image to version 2 : `kubectl set image deployments/kubernetes-bootcamp kubernetes-bootcamp=jocatalin/kubernetes-bootcamp:v2`
- check pods : `kubectl get pods -o wide`

### Verify an update
- Check the service : `kubectl describe services/kubernetes-bootcamp`
- Create environmenet NODE_PORT: `export NODE_PORT=$(kubectl get services/kubernetes-bootcamp -o go-template='{{(index .spec.ports 0).nodePort}}')`, `echo NODE_PORT=$NODE_PORT`
- check through IP and PORT : `curl $(minikube ip):$NODE_PORT`
- Other way: rollout status command: `kubectl rollout status deployments/kubernetes-bootcamp`
- check image version of the app : `kubectl describe pods`

### Rollback an update
- Perform another update: `kubectl set image deployments/kubernetes-bootcamp kubernetes-bootcamp=gcr.io/google-samples/kubernetes-bootcamp:v10`
- get status of deployment: `kubectl get deployments`
- when found something wrong, check with `kubectl get pods -o wide` and `kubectl describe pods`
- rollouw undo the update: `kubectl rollout undo deployments/kubernetes-bootcamp`
- check again the pods



# Reference
- https://www.packtpub.com/application-development/kubernetes-aws
- https://kubernetes.io/docs/tutorials/kubernetes-basics/

Build and launching Kubernetes
- Launching nginx in a pod, run `kubectl create deployment web --image nginx`
- Get Events, run `kubectl get events`
- Deploy pod, run `kubectl get deploy`
- Get Pods infor, run `kubectl get pods` and `kubectl get pods -o wide` for detail
- Expose Pods, run `kubectl expose deployment/web --port 80 --type NodePort`
- Delete exposed web if exist, run `kubectl delete svc/web`
- List services in pods, run `kubectl get svc`
- Check minikube ip, run `minikube ip`
- Open IP and port that listed in 2 command above, example : `172.17.44.85:32417`
- Delete pods, example run `kubectl delete pod web-d86c95cc9-q6klk`, list pod can be get using run `kubectl get pods`
- Replica Pods (example), run `kubectl scale deployment/web --replicas=2`

- Generate YAML file, run `kubectl create deployment web --image=nginx --dry-run -o yaml`
- Delete Deploy Web, run `kubectl delete deploy/web`
- Deploy web using yaml, run `kubectl apply -f .\deployment.yaml` (filename), check with get deploy


