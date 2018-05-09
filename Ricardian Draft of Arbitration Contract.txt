eos_logo_horiz_135x55.png 

RICARDIAN CONTRACT:
EOS.IO ARBITRATION


________________


Ricardian Contract:
Arbitration Smart Contract on EOS


THIS IS A DRAFT


Please see the outline below, of the Ricardian Contract for the Arbitration Smart contract on the EOS.io blockchain.


This document describes the most current process and revisions in this workflow.


There is an open GitHub ticket for this Smart Contract, here.


There is an open GitHub ticket for creating the Arbitration Case Registry, here.




________________
## ACTION - ‘{{ claimant-submit-claim }}’
### Description
A consumer, hereby “Claimant”, feels harmed by a smart contract or activity by a Dapp on the blockchain. The Claimant can be a business or a person.


When invoking the “Arbitration Smart Contract”, the Claimant is served a notice about filing false claims.  The Claimant must agree to the notice and warning about filing false claims and understands that they are liable for any falsehoods and must agree that actions and damages can be taken against them if the Arbitrator finds they are flawed fraudulent in this claim.


Claimant is required to affirm reading this notice, which will require them typing their name in an “I agree to the notice and terms stated” . A click of an OK button is not sufficient to affirm they have read the Claimant advisory notice.


Only after the Claimant abuses the "priority" flag more than 5% of their claims in the trailing 365 day period. (Scalable, covers large entities who might at some point be filing 1000 claims a year.)


The smart contract must include a message to the Claimant, "continuing with this claim confirms your agreement to arbitration under the rules for dispute resolution (RDR) for the EOS.IO mainnet.  Any defects in agreement need to be noted now for consideration by the Arbitrator."  this should include a link to the RDR when it is posted on github.


Claimant will also provide their on-chain identity (using the on-chain identity service), with an email address, agreeing that email is the best way to contact them.  Email address will be the default contact method, using the on-chain email service.


Claimant puts up a Bond, a good faith deposit, indicating they are serious and willing to pay damages (forfeit Bond) if the complaint is found to be frivolous.  The bond should be a percentage of the claim for damages, which is is at least 10% of their claim.  The final amount to be bonded is up to the discretion of the Arbitrator.


The Bond indicates the seriousness and intent of the Claimant to not defraud the system. If the Claimant is proven to be correct in their claim and wins the case, the judgment is for the Claimant, their Bond is returned. If the Claimant does not win the case, the judgment is for the respondent, the Claimant will lose their Bond and the Bond is awarded to the respondent.


If the Claimant is unable to put up a Bond, this is indicated in the filing.  The Arbitrator can opt to reduce or waive the bond or ask for a bond to be put up by the legal defense fund.


As a part of submitting a claim, the claimant will offer up a $10 arbitration submittal fee, the fee and dollar amount will be equivalent to US $10 but can be submitted in the national currency of the claimant. This is also called the filing fee. This fee covers the cost of arbitration. If during the review of the case, the arbitrator determines that this is a more complex case the arbitrator can respond back with additional fees requested and a justification thereof.


The Arbitration Smart Contract should allow the Arbitration Forum to save the ID of a Claimant and if they have claimed inability to pay bond, in order to reduce potential fraud. Repeat Claimants that cannot or will not offer-up a bond should be subject to rigorous review and potential he a ban from filing arbitration claims if they are found to be creating cases frivolously by claiming they cannot put up a Bond.


### Inputs and Input Types


The Claimant must provide the following:


- Claimant identity (not Pub Key), using Identity Service on chain: [[claimant_ID]]
- Claimant signature agreeing to notice of false claims [[claimant_false_claim_signature]]
- Other involved identities, using Identity Service:  [[other_involved_IDs]]
- Text describing damages:  [[damages_text]]
- Evidence of the claim:  [[evidence_text]]
- Transaction ID(s) of transaction(s) in question:  [[transaction_IDs_involved]]
- Estimate of losses, in the amount of their local currency:  [[estimated_damages_value]]
- Local currency of claimant: [[claminant_local_currency]]
- Statement that they are able to put up a 10% (of claimed losses) Bond to file the claim.  [[Claimant_can_pay_bond]]
- Initial Bond posted, Filing fee of at least 10% of claim:  [[bond_posted_amount]]
- Remedies requested:  [[remedies_requested_test]]
- Industry type of claim, example "financial":  [[industry_of_claim]]
- Claim priority (Standard, Urgent, Emergency):  [[claim_priority]]
  - Default is standard priority- 30 days
- Emergency Injunctive Relief:  accounts to block, etc:  [[emergency_injunctive_text]]
- Confidentiality request status (yes or no):  [[should_be_confidential]]
  -  Confidentiality reasons given [[reasons_for_confidentiality_text]]
- Language of case requested:  [[preferred_language]]








________________
## ACTION - ‘{{ forum-claim-review }}’
### Description
The Arbitration Forum receives notice of a new claim. They review the case, assess the requested priority by Claimant, consider the language request, industry, and available Arbitrators that could meet those criteria.  


The Arbitrators Forum should also reviews the emergency injunctive relief (if requested) as a part of assigning an Arbitrator. 


In the initial review claim step, the Arbitration forum sends a message back to the Claimant and the Respondent that their case is being reviewed.  If the Arbitration forum deems this to be a complicated case, they can at their discretion, extend the time to respond from 10 days to a maximum of 60.  This will give both parties a chance to respond if additional information is required.


If there is emergency injunctive relief requested, the Arbitration Forum can recommend response as low as 2 days.


The Arbitration Forum then sends a email message to the Claimant and Respondent indicating the details of the claim that has been opened.




The Claimant and Respondent each have a default 10 calendar days from the date the notification email was sent to acknowledge receipt of the email and respond back that they have received the notification. 


Emergency Injunctive relief and claim priority of “emergency” have 2 days to respond.  The Arbitrator can extend the response to a maximum of 90 days at their discretion.


### Inputs and Input Types
The Response to the Claimant and the Respondent include the following:


- Arbitration Case ID: [[arb_case_ID]]
- Claimant identity (not Pub Key), using Identity Service on chain: [[claimant_ID]]
- Respondent identity (not Pub Key), using Identity Service on chain: [[respondent_ID]]
- Other involved identities, using Identity Service:  [[other_involved_IDs]]
- Text describing damages:  [[damages_text]]
- Evidence of the claim:  [[evidence_text]]
- Transaction ID(s) of transaction(s) in question:  [[transaction_IDs_involved]]
- Estimate of losses, in the amount of their local currency:  [[estimated_damages_value]]
- Local currency of claimant: [[claminant_local_currency]]
- Statement that they are able to put up a 10% (of claimed losses) Bond to file the claim.  [[Claimant_can_pay_bond]]
- Initial Bond posted, Filing fee of at least 10% of claim:  [[bond_posted_amount]]
- Remedies requested:  [[remedies_requested_test]]
- Industry type of claim, example "financial":  [[industry_of_claim]]
- Claim priority (Standard, Urgent, Emergency):  [[claim_priority]]
  - Default is standard priority- 30 days
- Emergency Injunctive Relief:  accounts to block, etc:  [[emergency_injunctive_text]]
- Confidentiality request status (yes or no):  [[should_be_confidential]]
  -  Confidentiality reasons given [[reasons_for_confidentiality_text]]
- Language of case requested:  [[preferred_language]]
- Case last updated date field:  [[last-updated]]
- Case fees:  [[case-fees]]
- Response-required-by-date:  [[response-date]]






________________


## ACTION - ‘{{ update-submit-claim }}’
### Description
The Arbitration Forum can ask for additional information needed in the claim.  If additional information is required, the Arbitration Forum sends a email message back to the Claimant asking for specific information that is required before assigning and opening a case. 


The text and context of this action will be up to the Arbitrator, as every case will be different.


Responses will become part of the Case record.  


No additional data fields are required for this step, previously used fields are appended to if additional data is received from the Claimant.




________________


## ACTION - ‘{{ assign-case }}’
### Description
Once the Arbitration Forum has all the required information, they will take the claim information previously recorded and create a new case ID (which becomes one of the indexes to the data), assign an Arbitrator, and message the Claimant and the Respondent. 


The Arbitration Forum sends a message to the Arbitration Smart Contract noting the Arbitrator has been assigned.  The Smart Contract automatically assigns a case ID to this claim.


The Claimant and Respondent are then sent an email using the on-chain email service.  The Claimant and the Respondent are given different activation codes to prove they received the message.  This email can include the Case ID and the assigned Arbitrator.


When the Arbitration Forum assigns a case, it becomes an official record, the action of the assigning a case will update the arbitration case registry. The arbitration case registry will include the data originally submitted by the Claimant, which is echoed back to the Claimant and sent to the Respondent, through the email service. 


The Arbitration Case Registry is a full record of all arbitration cases that are currently assigned, currently in progress, and closed (aka resolved).


The states that a claim can be and are as follows:
- Newly submitted, not yet reviewed - (new)
- In review by Arbitration Forum - (in-forum-review)
- Claim denied by Arbitration Forum or Arbitrator - (denied)
- Assigned to an arbitrator - (active)
- Case has been arbitrated and remedies ruled upon - (arbitrated)
- BP's have been instructed to award damages or not - (bp-awarding-damages)
- Damages / awards have been transferred as instructed by Arbitrator - (closed)


The Arbitrator should decide on the amount of Bond to be placed (if different than 10% default in local currency of Claimant) taking into account her initial estimate of the case complexity, cost of her time, claims requested etc. The Arbitrator can also request the bond to be split between Claimant and Respondent.


When the Claimant and the Respondent have responded to their activation codes, the Arbitrator sets the case state to “active”.  The Claimant and Respondent both receive the “new case accepted” notification via the on-chain email service. At this point, the case is active.
### Inputs and Input Types
The “assign-case” message to Claimant and Respondent will include the following:
- Arbitration Case ID: [[arb_case_ID]]
- Case State (new, in-forum-review, dropped, denied, active, arbitrated, bp-awarding-damages, closed)
- Arbitrator, name, identity, preferred language
- Number of days both parties have to respond (10 days is default)
- Date accepted or rejected (and immediately closed)
  - If rejected, ruling on why it was rejected goes to both parties via email.
- Terms of Claim (what was submitted) so it is clear what the issue is.
- Claimed damages
- Bond total, in local currency of Claimant, placed for this claim. Default 10% of damages in local currency of Claimant
- Bond total that Respondent has been asked to place for this claim.
- Fees provided during submittal
- Additional arbitration fees requested.
- Evidence of claim damages
- Estimate of losses
- Requested priority of claim
- Emergency injunctive relief requested
- Privacy / Confidentiality status of case
- Assigned Arbitrator ID (assigned by the Arbitration Forum)
- Case last updated date field
- Response-required-by-date


________________


## ACTION - ‘{{re-assign-priority}}’


### Description
If the Arbitration Forum or assigned Arbitrator decides that a case is not an emergency as indicated by the Claimant in the “claim Priority” field upon submit of claim, Arbitration Forum or Arbitrator can request additional supporting information from Claimant to explain why this is an emergency.


If insufficient evidence is given that this is an emergency, the Arbitration Forum or Arbitrator can re-assign the priority to “normal”
### Inputs and Input Types
Update action of case priority:


- Arbitration Case ID: [[arb_case_ID]]
- Claim priority (Standard, Urgent, Emergency):  [[claim_priority]]
- Case last updated date field








________________


## ACTION - ‘{{ deny-claim }}’
### Description
If the Arbitration Form reviews a claim and finds it to be frivolous, the Arbitration Form can deny said claim. The denial is sent back to the Claimant with reasons explaining why the claim was denied.


Claim denials are final.  The Arbitration Form acted as the “Arbitrator” in that case.
### Inputs and Input Types
Update action of case priority:


- Arbitration Case ID: [[arb_case_ID]]
- Case State is set to “denied”
- Case last updated date field






________________
## ACTION - ‘{{re-assign-case}}’
### Description
If the assigned Arbitrator on a case needs to recuse themselves or becomes unavailable, the assigned Arbitrator can send the case back to the Arbitration Forum asking the case be reassigned to another Arbitrator.
### Inputs and Input Types
Update action of case priority:


- Arbitration Case ID: [[arb_case_ID]]
- Case last updated date field
- Assigned Arbitrator ID (updated to new ID)
________________


## ACTION - ‘{{ change-fees }}’
### Description
The arbitrator has the right to increase the fees for the claim. The default $10 filing fee may be judged by the arbitrator to be insufficient to cover the work required to arbitrate this claim. If the arbitrator determines the additional fees are required to cover their time, the arbitrator will include additional fees required in their response to the Claimant.
### Inputs and Input Types
Update action of case priority:


- Arbitration Case ID: [[arb_case_ID]]
- Case fees:  [[case-fees]]
- Case last updated date field


________________
## ACTION - ‘{{ drop-case }}’
### Description
If the Claimant decides to drop their claim they should be able to send a message to the Arbitration Smart Contract with the Claim-ID and a “drop the case” message. 
### Inputs and Input Types
Update action of case priority:


- Arbitration Case ID: [[arb_case_ID]]
- Case State is set to “dropped”
- Case last updated date field




________________
## ACTION - ‘{{ freeze-case }}’
(see detail in “unfreeze case)
## ACTION - ‘{{ unfreeze-case }}’
### Description
If there is a problem with an Arbitrator, the Forum Admin Team must be able to quickly freeze (and unfreeze) cases.


Since an Arbitrator can be assigned more than 1 case at a time, this must account for updating a number of Case IDs at the same time (possibly / ideally) 


Arbitrator IDs as inputs, allowing  Instead of a frantic flurry to figure out which 5 or 9 or 15 (?) cases an Arb may be handling & trying to freeze them all individually, just quickly call "(Un)Freeze Case(s)" to suspend the Arb's work while any questions or problems relating to the Arb are sorted.


Additionally, "(Un)Freeze Case(s)" could send automatic notifications to all parties that their cases are frozen / unfrozen, with standard boilerplate text filled in, but also with an option for the caller (the Forum Administrator most likely) to write in a custom explanation. "Your case has been frozen because the Arbitrator has been hospitalized after an accident. All time limits are suspended. Please expect an update with possible re-assignment within X days / weeks."
### Inputs and Input Types
Update action of case priority:


- Arbitrator ID
- Case(s) State is set to “on-hold”
- Case last updated date field


________________


## ACTION - ‘{{ update-parties }}’
### Description
If there an Arbitrator needs to add additional claimants or respondents to a case, they would execute the change-parties action, allowing an update (or the addition) of Claimant(s) or Respondent(s).


### Inputs and Input Types
Update action of case priority:


- Arbitrator ID
- Claimant IDs
- Respondent IDs
- Case last updated date field




________________


## ACTION - ‘{{ notify-respondent }}’
### Description
Similar to the Claimant, the Respondent receives the “new case opened against them” notification via the on-chain email service. They then respond to the arbitration Arbitrator with their activation code to confirm receipt of the email.


A Respondent cannot choose to drop a case.  The Respondent at this point is also allowed to respond with their supporting documentation and evidence to support their position in this case.  


Once the Respondent has responded with their Claim-ID activation code the Arbitrator knows that the Respondent is ready to proceed with the case. If the Respondent does not respond within 30 days the claim should automatically proceed without the Respondent.




________________


## ACTION - ‘{{ extend-response-deadline }}’
### Description
The assigned Arbitrator, at their discretion, can extend the time to respond from 30 days to a maximum of 60.  This will give both parties a chance to respond if there are circumstances that complicate the case.


### Inputs and Input Types
Update action of new case response deadline:


- Arbitration Case ID: [[arb_case_ID]]
- Response-required-by-date:  [[response-date]]
- Case last updated date field
________________


## ACTION - ‘{{ review-add-details }}’
### Description
Once the case initiation and additional supporting documentation is provided, the Arbitrator is authorized to begin their work to resolve the case. 


The Arbitrator can pass the case to another Arbitrator if they feel that their expertise is not aligned or if there is a conflict of interest in this case that was assigned to them.


The Arbitrator can ask for any additional information, or clarifying documentation (or proof) that was not disclosed during the initial response prior to opening the case.  If the Arbitrator requires additional information/documentation, both parties are notified of what additional information is requested. They are notified by the on-chain email service.


If any requested supporting clarification or documents have been received the Arbitrator then reviews that clarification and can ask for additional clarification if needed.  This clarification process can happen until the Arbitrator has determined that all supporting documentation and information has been provided by both parties.


________________




## ACTION - ‘{{ arbitrator-issue-remedies }}’
### Description
Once the Arbitrator has all the information that they believe is relevant to this case, they will review and render a ruling.  


The rulings can be (but not limited to): fines to the Respondent, freezing of the DAap by the Blocka Producers, freezing accounts, etc. The Arbitrator can instruct Block Producers to transfer EOS to the appropriate parties to resolve any financial damages. 


The Arbitrators rule on remedies is final. Once the Arbitrator rules on the case, based on the rules for dispute resolution, the Claimant and Respondent are bound to the ruling by the Arbitrator. The case is closed once a final ruling is given by the assigned Arbitrator or an additional Arbitrator who is pulled into the case.


Once the Arbitrator rules on a case, the Arbitrator closes the case in the Smart Contract and the case is marked as resolved, pending awards. 


The Arbitrator informs Block Producers of the damages and awards and instructs Block Producers to do the appropriate transfers of EOS (or other on-chain tokens/coins/currency), based on the on-chain identity of the Claimant and Respondent, awards are made 30 days after the closing of a case[a][b].
### Inputs and Input Types
Data sent to the Block Producers will include:
- Arbitration case number
- Arbitrator, name, identity, preferred language
- Date accepted 
- Terms of Claim (what was submitted) so it is clear what the issue is.
- Claimed damages
- DApp to freeze (if arbitrator deems DApp to be fraudulent)
- Respondent Identity / Account ID to freeze (if arbitrator deeps DApp to be fraudulent) 
- Bond total to be given to Claimant (returned)
- Bond total to be given to Respondent (award)
- Fees provided during submittal that will be transferred to Arbitrator
- Additional arbitration fees requested
- Evidence of claim damages
- Requested priority of claim
- Emergency injunctive relief requested
- Privacy / Confidentiality status of case
- Token name / Currency Name to transfer
- Identity of account to transfer from
- Identity of account to transfer to
- Date transfer must be completed


________________
## ACTION - ‘{{ close-case }}’
### Description
Once the Arbitrator receives confirmation that transfers are complete the Arbitrator closes the case. The Arbitrator also instructs the Block Producers that the Claimant bond be returned to the claimant if they win the case or the respondent if the claimant does not win their case, as outlined in the rules for dispute resolution.


The Arbitrator documents the case with the final judgment damages and details as a part of closing the case.  The dates of a case closing and ruling are recorded in the case registry.


### Inputs and Input Types
Update action of new case response deadline:


- Arbitration Case ID: [[arb_case_ID]]
- Case State is set to “closed”
- Case last updated date field






Action
	Input
	Input Type
	{{ transfer }}
	{{ from }}
{{ to }}
{{ quantity }}
{{ memo }}
	{{ account_name }}
{{ account_name }}
{{ asset }}
{{ string }}
	{{ issue }}
	{{ to }}
{{ quantity }}
{{ memo }}
	{{ account_name }}
{{ asset }}
{{ string }}
	{{ create }}
	{{ issuer }}
{{ maximum_supply }}
{{ can_freeze }}
{{ can_recall }}
{{ can_whitelist }}
	{{ account_name }}
{{ asset }}
{{ uint8 }}
{{ uint8 }}
{{ uint8 }}
	

Arbitration Smart Contract                                                                        Page 1 of 
[a]Another SWAG at deadlines
[b]Contract Action "(Re)Set Response Window". Optional arguments: ClaimID, CaseID, Communication ID