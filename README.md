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

Get Nodes : `kubectl get nodes`
Get Nodes wide display : `kubectl get nodes -o wide`
Get Detail Description of Nodes : `kubectl describe nodes`

### Reference
- https://www.packtpub.com/application-development/kubernetes-aws

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


