import Authenticated from "@/Layouts/AuthenticatedLayout.jsx";
import {Typography} from "@material-tailwind/react";
import {Link} from "@inertiajs/react";

const TABLE_HEAD = ["Judul", "Harga", "Aksi"];

export default function MyPropeti({auth, propetis}) {
    return <Authenticated user={auth.user}>
        <table className="w-full min-w-max table-auto text-left">
            <thead>
            <tr>
                {TABLE_HEAD.map((head) => (
                    <th
                        key={head}
                        className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                    >
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal leading-none opacity-70"
                        >
                            {head}
                        </Typography>
                    </th>
                ))}
            </tr>
            </thead>
            <tbody>
            {propetis.map(({title, price, id}, index) => {
                const isLast = index === propetis.length - 1;
                const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                return (
                    <tr key={index}>
                        <td className={classes}>
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                            >
                                {title}
                            </Typography>
                        </td>
                        <td className={classes}>
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                            >
                                {price}
                            </Typography>
                        </td>
                        <td className={`${classes} flex space-x-2`}>
                            <Link href={route('propeties.delete', id)}>
                                <Typography
                                    variant="small"
                                    color="red"
                                    className="font-normal"
                                >
                                    Hapus
                                </Typography>
                            </Link>
                            <Link href={route('propeties.show', id)}>
                                <Typography
                                    variant="small"
                                    color="blue"
                                    className="font-normal"
                                >
                                    Lihat
                                </Typography>
                            </Link>
                        </td>
                    </tr>
                );
            })}
            </tbody>
        </table>
    </Authenticated>
}
