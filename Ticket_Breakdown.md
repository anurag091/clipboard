# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

Very realistic problem, here is the possible breakdown for ticket, I am sure there could be more but I want to highlight few mojor tickets.

Not estimating it cause I believe any estimation should not be done based on just one person knowledge or perception.

1- Update Agent table(I assume there is)db schema and add a new column for the custom ID that Facilities can save.

2- Agent model need to be updated. Re-write the adapter that it can accommodate new value as well.

3- Facilities API Endpoint: 

   I- Create a new API endpoint that allows Facilities to save/update the custom ID for an Agent. 
   
   II - This endpoint should receive the Facility ID, Agent ID, and the custom ID as parameters.
   
4- Add user interface where facilities can enter custom ID.

(Handle scenarios for duolicate, format and can suggest available custome IDs)

5- Update report generation adapter so it can take custome ID as well

6- Ofcourse make sure unit and Integration test are in place.

I can think of one more to support older reports on custom Id. We might have to run some script to fill data for past reports
