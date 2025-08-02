import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";


export default function TableForm(){
  return(
    <div className="w-full lg:w-[calc(100%-290px)] h-screen p-8 box-border lg:translate-x-[288px] translate-x-0">
      <div className="bg-[url(/lickitung.png)] bg-center bg-no-repeat bg-contain inset-0 -z-1 absolute opacity-10 sm:scale-75"></div>
      <div>
        <Table>
          <TableCaption>Customized Pin Customers</TableCaption>
          <TableHeader className="bg-pink-100">
            <TableRow>
              <TableHead><Checkbox className="mr-1"/> No.</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Course and Section</TableHead>
              <TableHead>Uploaded Picture</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell><Checkbox className="mr-1"/> 1</TableCell>
              <TableCell>Kenjie Emmanuel Lagaras</TableCell>
              <TableCell>BSCPE 4 Day</TableCell>
              <TableCell><Button>Download</Button></TableCell>
            </TableRow>
            <TableRow>
              <TableCell><Checkbox className="mr-1"/> 1</TableCell>
              <TableCell>Kenjie</TableCell>
              <TableCell>BSCPE 4 Day</TableCell>
              <TableCell><Button>Download</Button></TableCell>
            </TableRow>
            <TableRow>
              <TableCell><Checkbox className="mr-1"/> 1</TableCell>
              <TableCell>Kenjie</TableCell>
              <TableCell>BSCPE 4 Day</TableCell>
              <TableCell><Button>Download</Button></TableCell>
            </TableRow>
            <TableRow>
              <TableCell><Checkbox className="mr-1"/> 1</TableCell>
              <TableCell>Kenjie</TableCell>
              <TableCell>BSCPE 4 Day</TableCell>
              <TableCell><Button>Download</Button></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  )
}