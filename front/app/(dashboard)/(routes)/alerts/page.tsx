import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Alert = () => {
  const tableNotifications = [
    { event: "Table Component Created", details: "Component for displaying notifications", time: "09:15 AM" },
    { event: "Table Data Updated", details: "Data has been updated with the latest information", time: "09:30 AM" },
    { event: "User List Loaded", details: "List of users has been successfully loaded", time: "10:00 AM" },
    { event: "Caption Set", details: "Table caption set to 'A list of users'", time: "10:15 AM" },
    { event: "Header Updated", details: "Header columns updated to show User ID and Name", time: "10:30 AM" },
    { event: "No Data Available", details: "No user data is available to display", time: "11:00 AM" },
    { event: "User Added", details: "A new user has been added", time: "11:15 AM" },
    { event: "User Removed", details: "A user has been removed", time: "11:30 AM" },
    { event: "Data Sorted", details: "Table data has been sorted according to a criteria", time: "12:00 PM" },
    { event: "Data Filtered", details: "Data has been filtered to display specific records", time: "12:15 PM" },
    { event: "Row Selected", details: "A row in the table has been selected", time: "12:30 PM" },
    { event: "Data Exported", details: "Table data has been successfully exported to a file", time: "01:00 PM" },
    { event: "Print Preview", details: "Table is ready for print preview", time: "01:15 PM" },
    { event: "Cell Data Updated", details: "Data in a table cell has been updated", time: "01:30 PM" },
    { event: "Configuration Saved", details: "Table configuration settings have been saved", time: "02:00 PM" },

  ];

  return (
    <div>
      <Table>
        <TableCaption>Notification Log</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Event</TableHead>
            <TableHead>Details</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableNotifications.map((notification, index) => (
            <TableRow key={index}>
              <TableCell>{notification.event}</TableCell>
              <TableCell>{notification.details}</TableCell>
              <TableCell>{notification.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Alert;
