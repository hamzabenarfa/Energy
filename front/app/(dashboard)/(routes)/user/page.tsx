"use client";

import { Button } from "@/components/ui/button";
import { UserTable } from "./_components/user-table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
const user = () => {
  return (
    <div>
      <div className="flex flex-row justify-between items-center p-4 bg-slate-200">
        <h1>Admin</h1>

        <Dialog>
          <DialogTrigger>
            <Button variant="default" size="lg">
              New
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-center">
                Enregistrer un utilisateur:
              </DialogTitle>
              <form>
                <div className="form-group">
                  <label className="block font-semibold">Nom :</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>
                <div className="form-group">
                  <label className="block font-semibold">Prenom :</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>
                <div className="form-group">
                  <label className="block font-semibold">Role :</label>
                  <select className="w-full px-3 py-2 border rounded-md">
                    <option value="user">User</option>
                    <option value="ingenieur">Ingénieur</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>

                <Button type="button" className="mt-4 w-full self-center">
                  Enregistrer
                </Button>
              </form>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>

      <UserTable />
    </div>
  );
};

export default user;
