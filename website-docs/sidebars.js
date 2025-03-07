module.exports = {
  someSidebar1: {
    Operator: [
      "intro",
      "getting-started",
    ],
    "Operator Guide": [
      "operator-guide/state-db",
      "operator-guide/monitoring",
      "operator-guide/configuration",
      "operator-guide/migrate-network",
      "operator-guide/increase-resources",
      "operator-guide/increase-storage",
      "operator-guide/renew-certificates",
      "operator-guide/istio",
      "operator-guide/upgrade-hlf-operator",
    ],
    "User Guide": [
      "user-guide/network-config",
      "user-guide/network-config-kubernetes",
      "user-guide/create-channel",
      "user-guide/install-chaincode",
      "user-guide/enroll-users",
      "user-guide/develop-chaincode-locally",
    ],
    "Chaincode development": [
      "chaincode-development/architecture",
      "chaincode-development/getting-started",
    ],
    "Chaincode deployment": [
      "chaincode-deployment/getting-started",
      "chaincode-deployment/external-chaincode-as-a-service",
      "chaincode-deployment/k8s-builder",
    ],
    "Kubectl Plugin": ["kubectl-plugin/installation"],
    CouchDB: ["couchdb/external-couchdb", "couchdb/custom-image"],
    "GRPC Proxy": ["grpc-proxy/enable-peers", "grpc-proxy/enable-orderers"],
    "Operations Console": [
      "operations-console/getting-started",
      "operations-console/adding-cas",
      "operations-console/adding-peers",
      "operations-console/adding-orderers",
      "operations-console/adding-orgs",
    ],
    "Operator UI": [
      "operator-ui/getting-started",
      "operator-ui/deploy-operator-ui",
      "operator-ui/deploy-operator-api",
    ],

  },
};
