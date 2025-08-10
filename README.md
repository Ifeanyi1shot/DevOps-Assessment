# DevOps Assessment Project

## Overview
This repository contains a complete **.NET 8 backend**, **React frontend**, **Helm chart configurations**, and **GitHub Actions pipeline** integrated with **ArgoCD** for automated deployments to **Azure Kubernetes Service (AKS)**.

The setup demonstrates:
- Full containerization of backend & frontend apps
- Azure Container Registry (ACR) integration
- Helm-based Kubernetes deployments
- GitOps workflow using ArgoCD
- Automated CI/CD pipeline via GitHub Actions

---

## 1. Backend (.NET 8) Setup

### Features
- ASP.NET Core Web API
- SQL Server (Azure SQL Database)
- RESTful API endpoint: `/api/products`
- Entity Framework Core with code-first approach
- Configurable via `appsettings.json` or environment variables

### Steps Performed
1. Created a simple **Hello World** .NET 8 API project.
2. Connected it to an **Azure SQL Database**.
3. Exposed `/api/products` endpoint to retrieve products from the database.
4. Containerized the backend using a `Dockerfile`.
5. Created a Helm chart to deploy the backend in AKS.

---

## 2. Frontend (React) Setup

### Features
- React app to display product list.
- Axios calls to backend API via `/api/products`.
- Error handling for API failures.

### Steps Performed
1. Created a simple React application using `create-react-app`.
2. Connected the frontend to the backend API.
3. Containerized the frontend with a `Dockerfile`.
4. Created a Helm chart for frontend deployment in AKS.

---

## 3. Azure Kubernetes Service (AKS) Setup

### Steps Performed
1. Created an **Azure Container Registry (ACR)** using ARM template.
2. Created an **AKS cluster** using ARM template.
3. Connected AKS to ACR (manual Docker registry secret since I’m not subscription owner).
4. Installed **NGINX Ingress Controller** for public access.
5. Configured Kubernetes services for both backend & frontend.
6. Configured Ingress routes for `/` (frontend) and `/api` (backend).

---

## 4. Database Integration

- Created an Azure SQL Database.
- Allowed AKS **outbound IPs** in the Azure SQL firewall.
- Verified connectivity from AKS pods to Azure SQL.
- Manually inserted product data using SQL commands so the frontend could display it.

---

## 5. GitOps with ArgoCD

### Steps Performed
1. Installed ArgoCD in AKS:
   ```bash
   kubectl create namespace argocd
   kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml

2. Created ArgoCD Application manifests for:
   Backend Helm chart
   Frontend Helm chart
   Configured automated sync and self-healing.
   Verified that pushing Helm chart changes to GitHub auto-deploys via ArgoCD.


---

## 6. CI/CD with GitHub Actions

## Workflow
- On push to main branch:
- Build backend & frontend Docker images.
- Push images to ACR.
- Update Helm chart values.yaml with new image tag.
- Commit & push changes to GitHub.
- ArgoCD detects changes and deploys latest images to AKS.

---

## 7. Constraints & Notes

## Flutter Application
I could not create the Flutter application because I currently do not have enough space on my PC to install Android Studio, where I would like to build and test the Flutter app before adding it to the pipeline.
However, I have automated the deployment process for Flutter apps to both Google Play Store and Apple App Store.

Azure Pipeline Access
I could not run my application using Azure Pipeline because I need the main admin User for the Azure account to grant me service connection access.
The admin User has not been available.
I cannot give you access to the account directly — however, you can provide your email, and we may be able to grant read-only access to the Azure Portal.

Service Availability
Please note: all deployed services will be taken down after two weeks.

---

## 8. Deployment Flow

- Developer pushes code to GitHub.
- GitHub Actions builds Docker images & pushes to ACR.
- Helm chart values.yaml updated with new tag.
- Commit pushed to GitHub.
- ArgoCD detects changes → deploys to AKS.
- NGINX Ingress routes traffic to frontend & backend services.

---

## 9. Accessing Applications

Frontend → http://98.64.16.226/
Backend API → http://98.64.16.226/api/products/
ArgoCD UI (port-forwarded) → https://localhost:9090

---













