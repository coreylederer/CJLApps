# Smart Contract - `{{ currency }}`

This is an overview of the actions for the `{{ currency }}` smart contract. This Contract is legally binding and can be used in the event of a dispute. Disputes shall be settled through the standard arbitration process established by EOS.IO.

### Description

The `{{ currency }}` contract...

### Actions, Inputs and Input Types

The table below contains the `actions`, `inputs` and `input types` for the `{{ currency }}` contract.

| Action | Input | Input Type |
|:--|:--|:--|
| `{{ transfer }}` | `{{ from }}`<br/>`{{ to }}`<br/>`{{ quantity }}`<br/>`{{ memo }}` | `{{ account_name }}`<br/>`{{ account_name }}`<br/>`{{ asset }}`<br/>`{{ string }}` |
| `{{ issue }}` | `{{ to }}`<br/>`{{ quantity }}`<br/>`{{ memo }}` | `{{ account_name }}`<br/>`{{ asset }}`<br/>`{{ string }}` |
| `{{ create }}` | `{{ issuer }}`<br/>`{{ maximum_supply }}`<br/>`{{ can_freeze }}`<br/>`{{ can_recall }}`<br/>`{{ can_whitelist }}` | `{{ account_name }}`<br/>`{{ asset }}`<br/>`{{ uint8 }}`<br/>`{{ uint8 }}`<br/>`{{ uint8 }}` |