
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent, DropdownMenuItem,
  DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { FiEdit, FiMoreHorizontal, FiTrash2 } from "react-icons/fi"

type props = {
  ExcluiLancamento: (id: number) => Promise<void>,
  id: number
}

export function DropdownMenuDemo({ ExcluiLancamento, id }: props) {

  return (
    <DropdownMenu  >
      <DropdownMenuTrigger asChild className="bg-white text-white">
        <Button variant="outline"><FiMoreHorizontal /></Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">

        <DropdownMenuLabel>Opções</DropdownMenuLabel>

        <DropdownMenuSeparator />
        <Link href={`/dash?editar=true&id=${id}`} className="w-full cursor-pointer">
          <DropdownMenuItem className="cursor-pointer">
            <FiEdit className="mr-2 h-4 w-4" />
            <span>Alterar Lançamento</span>
          </DropdownMenuItem>
        </Link>

        <DropdownMenuItem className="cursor-pointer text-red-500" onClick={() => ExcluiLancamento(id)}>
          <FiTrash2 className="mr-2 h-4 w-4" />
          <span>Remover Lançamento</span>
        </DropdownMenuItem>

      </DropdownMenuContent>
    </DropdownMenu>
  )
}
