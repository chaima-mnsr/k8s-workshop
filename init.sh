#!/usr/bin/env sh

# create a k8s cluster
kind create cluster

# check that the kind cluster is created
kind get clusters

# check that k8s context is pointing to the new kind cluster
kubectl config get-contexts