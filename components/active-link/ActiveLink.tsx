import Link from "next/link";



interface Props {
    path: string;
    label: string;
}


export const ActiveLink = ({ path, label }: Props) => {
    return (
        <Link 
            href={ path } 
            className="mr-2">
            { label }
        </Link>
    )
}
