import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import Pagination from "@/Components/Pagination";
import { PROJECT_STATUS_CLASS_MAP, PROJECT_STATUS_TEXT_MAP } from "@/constant";

export default function Index({ projects }){
    return(
        <AuthenticatedLayout
        header={
            <h3 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-300">
                Projects
            </h3>
        }>
            <Head title="Projects"/>
            <div className="py-18">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-8 border-gray-500">
                                    <tr className="text-nowrap ">
                                        <th className="px-3 py-5">id</th>
                                        <th className="px-3 py-5">image</th>
                                        <th className="px-3 py-5">name</th>
                                        <th className="px-3 py-5">status</th>
                                        <th className="px-3 py-5">created at</th>
                                        <th className="px-3 py-5">due date</th>
                                        <th className="px-3 py-5">created by</th>
                                        <th className="px-3 py-5">actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {projects.data.map((project) => (
                                    <tr className="bg-white border-b dark:bg-gray-800 text-nowrap" key={project.id}>
                                        <td className="px-3 py-5">{project.id}</td>
                                        <td><img src={project.image_path} style={{width: 60}}/></td>
                                        <td className="px-3 py-5">{project.name}</td>
                                        <td className="px-3 py-5 text-white">
                                            <span className={"px-2 py-1 rounded " + PROJECT_STATUS_CLASS_MAP[project.status]}>{PROJECT_STATUS_TEXT_MAP[project.status]}</span>
                                        </td>
                                        <td className="px-3 py-5">{project.created_at}</td>
                                        <td className="px-3 py-5">{project.due_date}</td>
                                        <td className="px-3 py-5">{project.createdBy.name}</td>
                                        <td className="px-3 py-5">
                                            <Link href={route("projects.edit", project.id)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1">
                                                Edit
                                            </Link>
                                            <Link href={route("projects.destroy", project.id)} className="font-medium text-red-600 dark:text-red-500 hover:underline mx-1">
                                                Delete
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                            <Pagination links={projects.meta.links}></Pagination>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}