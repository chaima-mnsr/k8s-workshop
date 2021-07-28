#!/usr/bin/env sh

# create simple cluster
kind create cluster

# check that the kind cluster is created
kind get clusters

# check that k8s context is pointing to the new kind cluster
kubectl config get-contexts

# Check the number of nodes that we have in this cluster
kubectl get nodes

# create a second k8s cluster with 2 nodes and customized name
kind create cluster --name=k8s-workshop --config cluster/cluster-config.yml

# check that the kind cluster is created
kind get clusters

# check that k8s context is pointing to the new kind cluster
kubectl config get-contexts

# Check the number of nodes that we have in this cluster
kubectl get nodes

# check that k8s context is pointing to the new kind cluster
kubectl config get-contexts
kubectl config use-context kind-k8s-workshop

# Create nginx-ingress controller
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/main/deploy/static/provider/kind/deploy.yaml

# delete the cluster
kind delete cluster --name=kind -q

# Check it is deleted
kubectl config get-contexts
