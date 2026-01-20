import { TableHeadButton } from "./TableHeadButton";

interface props {
    sort: {
        sortSelected: [string, "asc" | "desc"] | null;
        toggleSortSelected: (field: string) => void;
    }
}

export const TableHeadProduct = ({sort}: props) => (
    <thead>
        <tr>
            <TableHeadButton label="Nombre de la Categoria" name="name" sortSelected={sort.sortSelected} toggleSortSelected={sort.toggleSortSelected} start />
            <TableHeadButton label="Categoría" name="category" sortSelected={sort.sortSelected} toggleSortSelected={sort.toggleSortSelected} />
            <TableHeadButton label="Sección" name="primary" sortSelected={sort.sortSelected} toggleSortSelected={sort.toggleSortSelected} />
            <TableHeadButton label="Precio" name="price" sortSelected={sort.sortSelected} toggleSortSelected={sort.toggleSortSelected} />
            <TableHeadButton textCenter label="Stock" name="currentAmount" sortSelected={sort.sortSelected} toggleSortSelected={sort.toggleSortSelected} />

            <TableHeadButton label="empty" name="empty" sortSelected={sort.sortSelected} toggleSortSelected={sort.toggleSortSelected} empty end />
        </tr>
    </thead>
)