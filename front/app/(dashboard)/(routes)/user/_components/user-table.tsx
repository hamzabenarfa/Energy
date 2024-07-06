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

export const UserTable = () => {
  const nom = ["Smith", "Johnson", "Brown", "Davis", "Wilson"];
  const prenom = ["John", "Jane", "Michael", "Sarah", "David"];

  return (
    <Table>
      <TableCaption>A list of users</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">User ID</TableHead>
          <TableHead>Name</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {nom.map((nom, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{`ID-${index + 1}`}</TableCell>
            <TableCell>
              {prenom[index]} {nom}
            </TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>

            <TableCell className=" gap-1">
              <Button size="lg" variant="warning" className=" w-full">
                Modifier
              </Button>{" "}
              <span></span>
              <Button size="lg" variant="destructive" className=" w-full">
                Supprimer
              </Button>{" "}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
