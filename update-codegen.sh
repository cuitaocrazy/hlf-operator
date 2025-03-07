#!/bin/bash

set -o errexit
set -o nounset
set -o pipefail

GO111MODULE=off go get -d k8s.io/code-generator/...

REPOSITORY=github.com/hyperledger-labs/hlf-operator
$(go env GOPATH)/src/k8s.io/code-generator/generate-groups.sh all \
                $PWD/pkg/client $PWD/api \
                "hlf.kungfusoftware.es:v1alpha1"
