import { PageLayout, Timeline } from "@/components";
import * as React from "react";

const WorkExperience: React.FC = () => {
    return (
        <PageLayout selected="WORK_EXPERIENCE">
            <div>
                <Timeline
                    items={[
                        {
                            period: "SEP 2022",
                            title: "Objectivity Part of Accenture",
                            tagline: "Senior Software Developer",
                            description:
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel semper arcu. Nullam et risus vel orci interdum venenatis. Aliquam erat volutpat. Sed vitae massa vel felis pharetra pharetra. Vestibulum id consequat neque. Nam eget risus ut nisi placerat rutrum. Sed id nunc bibendum, tempor sem non, mollis arcu. In hac habitasse platea dictumst. Ut vel nisi vitae ipsum varius laoreet. Integer at metus eu lectus fermentum lobortis. Suspendisse at efficitur ipsum. Donec et eros in nisi fermentum commodo. Duis fringilla leo ut turpis volutpat, sit amet hendrerit lacus tristique. Quisque at libero vel dui volutpat viverra. Ut consectetur lectus at nulla vehicula, nec consectetur eros cursus. Curabitur non arcu id libero ultricies luctus. Suspendisse potenti. Mauris eget ipsum lacinia, congue est non, euismod mauris. Integer lobortis bibendum tortor, in suscipit libero vestibulum nec. Sed sollicitudin magna sed felis hendrerit, ac laoreet neque vulputate. Pellentesque nec dui justo. Proin fringilla vestibulum libero sit amet hendrerit. Mauris eleifend aliquet est, a fringilla mi blandit vitae. Nulla facilisi. Ut dapibus tortor sit amet tempor venenatis. Morbi vulputate justo sit amet nisl luctus, eu efficitur mi vehicula. Integer hendrerit, orci in congue volutpat, nisi nunc egestas nulla, vel sollicitudin magna dolor nec mauris. Etiam faucibus mauris eu tellus vehicula, non finibus felis tincidunt. Integer et nisi at libero varius suscipit. Suspendisse potenti. Sed accumsan vestibulum risus, eget lobortis mi. Curabitur bibendum ipsum quis vestibulum ultricies. Vivamus vel elit vel felis placerat varius a nec leo. Vivamus rutrum libero et arcu venenatis, at commodo metus dictum. Sed quis malesuada magna. Vivamus id mauris quis purus rutrum pretium. Sed vel tincidunt odio.",
                        },
                        {
                            period: "SEP 2022",
                            title: "Objectivity Software Services Ltd.",
                            tagline: "Software Developer",
                            description:
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel semper arcu. Nullam et risus vel orci interdum venenatis. Aliquam erat volutpat. Sed vitae massa vel felis pharetra pharetra. Vestibulum id consequat neque. Nam eget risus ut nisi placerat rutrum. Sed id nunc bibendum, tempor sem non, mollis arcu. In hac habitasse platea dictumst. Ut vel nisi vitae ipsum varius laoreet. Integer at metus eu lectus fermentum lobortis. Suspendisse at efficitur ipsum. Donec et eros in nisi fermentum commodo. Duis fringilla leo ut turpis volutpat, sit amet hendrerit lacus tristique. Quisque at libero vel dui volutpat viverra. Ut consectetur lectus at nulla vehicula, nec consectetur eros cursus. Curabitur non arcu id libero ultricies luctus. Suspendisse potenti. Mauris eget ipsum lacinia, congue est non, euismod mauris. Integer lobortis bibendum tortor, in suscipit libero vestibulum nec. Sed sollicitudin magna sed felis hendrerit, ac laoreet neque vulputate. Pellentesque nec dui justo. Proin fringilla vestibulum libero sit amet hendrerit. Mauris eleifend aliquet est, a fringilla mi blandit vitae. Nulla facilisi. Ut dapibus tortor sit amet tempor venenatis. Morbi vulputate justo sit amet nisl luctus, eu efficitur mi vehicula. Integer hendrerit, orci in congue volutpat, nisi nunc egestas nulla, vel sollicitudin magna dolor nec mauris. Etiam faucibus mauris eu tellus vehicula, non finibus felis tincidunt. Integer et nisi at libero varius suscipit. Suspendisse potenti. Sed accumsan vestibulum risus, eget lobortis mi. Curabitur bibendum ipsum quis vestibulum ultricies. Vivamus vel elit vel felis placerat varius a nec leo. Vivamus rutrum libero et arcu venenatis, at commodo metus dictum. Sed quis malesuada magna. Vivamus id mauris quis purus rutrum pretium. Sed vel tincidunt odio.",
                        },
                        {
                            period: "SEP 2022",
                            title: "Ceridian Mauritius",
                            tagline: "Software Developer 3",
                            description:
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel semper arcu. Nullam et risus vel orci interdum venenatis. Aliquam erat volutpat. Sed vitae massa vel felis pharetra pharetra. Vestibulum id consequat neque. Nam eget risus ut nisi placerat rutrum. Sed id nunc bibendum, tempor sem non, mollis arcu. In hac habitasse platea dictumst. Ut vel nisi vitae ipsum varius laoreet. Integer at metus eu lectus fermentum lobortis. Suspendisse at efficitur ipsum. Donec et eros in nisi fermentum commodo. Duis fringilla leo ut turpis volutpat, sit amet hendrerit lacus tristique. Quisque at libero vel dui volutpat viverra. Ut consectetur lectus at nulla vehicula, nec consectetur eros cursus. Curabitur non arcu id libero ultricies luctus. Suspendisse potenti. Mauris eget ipsum lacinia, congue est non, euismod mauris. Integer lobortis bibendum tortor, in suscipit libero vestibulum nec. Sed sollicitudin magna sed felis hendrerit, ac laoreet neque vulputate. Pellentesque nec dui justo. Proin fringilla vestibulum libero sit amet hendrerit. Mauris eleifend aliquet est, a fringilla mi blandit vitae. Nulla facilisi. Ut dapibus tortor sit amet tempor venenatis. Morbi vulputate justo sit amet nisl luctus, eu efficitur mi vehicula. Integer hendrerit, orci in congue volutpat, nisi nunc egestas nulla, vel sollicitudin magna dolor nec mauris. Etiam faucibus mauris eu tellus vehicula, non finibus felis tincidunt. Integer et nisi at libero varius suscipit. Suspendisse potenti. Sed accumsan vestibulum risus, eget lobortis mi. Curabitur bibendum ipsum quis vestibulum ultricies. Vivamus vel elit vel felis placerat varius a nec leo. Vivamus rutrum libero et arcu venenatis, at commodo metus dictum. Sed quis malesuada magna. Vivamus id mauris quis purus rutrum pretium. Sed vel tincidunt odio.",
                        },
                        {
                            period: "SEP 2022",
                            title: "Ceridian Mauritius",
                            tagline: "Software Developer",
                            description:
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel semper arcu. Nullam et risus vel orci interdum venenatis. Aliquam erat volutpat. Sed vitae massa vel felis pharetra pharetra. Vestibulum id consequat neque. Nam eget risus ut nisi placerat rutrum. Sed id nunc bibendum, tempor sem non, mollis arcu. In hac habitasse platea dictumst. Ut vel nisi vitae ipsum varius laoreet. Integer at metus eu lectus fermentum lobortis. Suspendisse at efficitur ipsum. Donec et eros in nisi fermentum commodo. Duis fringilla leo ut turpis volutpat, sit amet hendrerit lacus tristique. Quisque at libero vel dui volutpat viverra. Ut consectetur lectus at nulla vehicula, nec consectetur eros cursus. Curabitur non arcu id libero ultricies luctus. Suspendisse potenti. Mauris eget ipsum lacinia, congue est non, euismod mauris. Integer lobortis bibendum tortor, in suscipit libero vestibulum nec. Sed sollicitudin magna sed felis hendrerit, ac laoreet neque vulputate. Pellentesque nec dui justo. Proin fringilla vestibulum libero sit amet hendrerit. Mauris eleifend aliquet est, a fringilla mi blandit vitae. Nulla facilisi. Ut dapibus tortor sit amet tempor venenatis. Morbi vulputate justo sit amet nisl luctus, eu efficitur mi vehicula. Integer hendrerit, orci in congue volutpat, nisi nunc egestas nulla, vel sollicitudin magna dolor nec mauris. Etiam faucibus mauris eu tellus vehicula, non finibus felis tincidunt. Integer et nisi at libero varius suscipit. Suspendisse potenti. Sed accumsan vestibulum risus, eget lobortis mi. Curabitur bibendum ipsum quis vestibulum ultricies. Vivamus vel elit vel felis placerat varius a nec leo. Vivamus rutrum libero et arcu venenatis, at commodo metus dictum. Sed quis malesuada magna. Vivamus id mauris quis purus rutrum pretium. Sed vel tincidunt odio.",
                        },
                        {
                            period: "SEP 2022",
                            title: "Ceridian Mauritius",
                            tagline: "Associate Software Developer",
                            description:
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel semper arcu. Nullam et risus vel orci interdum venenatis. Aliquam erat volutpat. Sed vitae massa vel felis pharetra pharetra. Vestibulum id consequat neque. Nam eget risus ut nisi placerat rutrum. Sed id nunc bibendum, tempor sem non, mollis arcu. In hac habitasse platea dictumst. Ut vel nisi vitae ipsum varius laoreet. Integer at metus eu lectus fermentum lobortis. Suspendisse at efficitur ipsum. Donec et eros in nisi fermentum commodo. Duis fringilla leo ut turpis volutpat, sit amet hendrerit lacus tristique. Quisque at libero vel dui volutpat viverra. Ut consectetur lectus at nulla vehicula, nec consectetur eros cursus. Curabitur non arcu id libero ultricies luctus. Suspendisse potenti. Mauris eget ipsum lacinia, congue est non, euismod mauris. Integer lobortis bibendum tortor, in suscipit libero vestibulum nec. Sed sollicitudin magna sed felis hendrerit, ac laoreet neque vulputate. Pellentesque nec dui justo. Proin fringilla vestibulum libero sit amet hendrerit. Mauris eleifend aliquet est, a fringilla mi blandit vitae. Nulla facilisi. Ut dapibus tortor sit amet tempor venenatis. Morbi vulputate justo sit amet nisl luctus, eu efficitur mi vehicula. Integer hendrerit, orci in congue volutpat, nisi nunc egestas nulla, vel sollicitudin magna dolor nec mauris. Etiam faucibus mauris eu tellus vehicula, non finibus felis tincidunt. Integer et nisi at libero varius suscipit. Suspendisse potenti. Sed accumsan vestibulum risus, eget lobortis mi. Curabitur bibendum ipsum quis vestibulum ultricies. Vivamus vel elit vel felis placerat varius a nec leo. Vivamus rutrum libero et arcu venenatis, at commodo metus dictum. Sed quis malesuada magna. Vivamus id mauris quis purus rutrum pretium. Sed vel tincidunt odio.",
                        },
                        {
                            period: "SEP 2022",
                            title: "Proximity BBDO Mauritius",
                            tagline: "Freelance",
                            description:
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel semper arcu. Nullam et risus vel orci interdum venenatis. Aliquam erat volutpat. Sed vitae massa vel felis pharetra pharetra. Vestibulum id consequat neque. Nam eget risus ut nisi placerat rutrum. Sed id nunc bibendum, tempor sem non, mollis arcu. In hac habitasse platea dictumst. Ut vel nisi vitae ipsum varius laoreet. Integer at metus eu lectus fermentum lobortis. Suspendisse at efficitur ipsum. Donec et eros in nisi fermentum commodo. Duis fringilla leo ut turpis volutpat, sit amet hendrerit lacus tristique. Quisque at libero vel dui volutpat viverra. Ut consectetur lectus at nulla vehicula, nec consectetur eros cursus. Curabitur non arcu id libero ultricies luctus. Suspendisse potenti. Mauris eget ipsum lacinia, congue est non, euismod mauris. Integer lobortis bibendum tortor, in suscipit libero vestibulum nec. Sed sollicitudin magna sed felis hendrerit, ac laoreet neque vulputate. Pellentesque nec dui justo. Proin fringilla vestibulum libero sit amet hendrerit. Mauris eleifend aliquet est, a fringilla mi blandit vitae. Nulla facilisi. Ut dapibus tortor sit amet tempor venenatis. Morbi vulputate justo sit amet nisl luctus, eu efficitur mi vehicula. Integer hendrerit, orci in congue volutpat, nisi nunc egestas nulla, vel sollicitudin magna dolor nec mauris. Etiam faucibus mauris eu tellus vehicula, non finibus felis tincidunt. Integer et nisi at libero varius suscipit. Suspendisse potenti. Sed accumsan vestibulum risus, eget lobortis mi. Curabitur bibendum ipsum quis vestibulum ultricies. Vivamus vel elit vel felis placerat varius a nec leo. Vivamus rutrum libero et arcu venenatis, at commodo metus dictum. Sed quis malesuada magna. Vivamus id mauris quis purus rutrum pretium. Sed vel tincidunt odio.",
                        },
                    ]}
                />
            </div>
            {/* <div className="-my-6">
                <div className="group relative py-6 pl-8 sm:pl-32">
                    <div className="font-caveat mb-1 text-2xl font-medium text-indigo-500 sm:mb-0">
                        The origin
                    </div>
                    <div className="mb-1 flex flex-col items-start before:absolute before:left-2 before:h-full before:-translate-x-1/2 before:translate-y-3 before:self-start before:bg-slate-300 before:px-px after:absolute after:left-2 after:box-content after:h-2 after:w-2 after:-translate-x-1/2 after:translate-y-1.5 after:rounded-full after:border-4 after:border-slate-50 after:bg-indigo-600 group-last:before:hidden sm:flex-row sm:before:left-0 sm:before:ml-[6.5rem] sm:after:left-0 sm:after:ml-[6.5rem]">
                        <time className="left-0 mb-3 inline-flex h-6 w-20 translate-y-0.5 items-center justify-center rounded-full bg-emerald-100 text-xs font-semibold uppercase text-emerald-600 sm:absolute sm:mb-0">
                            May, 2020
                        </time>
                        <div className="text-xl font-bold text-slate-900">
                            Acme was founded in Milan, Italy
                        </div>
                    </div>
                    <div className="text-slate-500">
                        Pretium lectus quam id leo. Urna et pharetra pharetra
                        massa massa. Adipiscing enim eu neque aliquam vestibulum
                        morbi blandit cursus risus.
                    </div>
                </div>

                <div className="group relative py-6 pl-8 sm:pl-32">
                    <div className="font-caveat mb-1 text-2xl font-medium text-indigo-500 sm:mb-0">
                        The milestone
                    </div>
                    <div className="mb-1 flex flex-col items-start before:absolute before:left-2 before:h-full before:-translate-x-1/2 before:translate-y-3 before:self-start before:bg-slate-300 before:px-px after:absolute after:left-2 after:box-content after:h-2 after:w-2 after:-translate-x-1/2 after:translate-y-1.5 after:rounded-full after:border-4 after:border-slate-50 after:bg-indigo-600 group-last:before:hidden sm:flex-row sm:before:left-0 sm:before:ml-[6.5rem] sm:after:left-0 sm:after:ml-[6.5rem]">
                        <time className="left-0 mb-3 inline-flex h-6 w-20 translate-y-0.5 items-center justify-center rounded-full bg-emerald-100 text-xs font-semibold uppercase text-emerald-600 sm:absolute sm:mb-0">
                            May, 2021
                        </time>
                        <div className="text-xl font-bold text-slate-900">
                            Reached 5K customers
                        </div>
                    </div>
                    <div className="text-slate-500">
                        Pretium lectus quam id leo. Urna et pharetra pharetra
                        massa massa. Adipiscing enim eu neque aliquam vestibulum
                        morbi blandit cursus risus.
                    </div>
                </div>

                <div className="group relative py-6 pl-8 sm:pl-32">
                    <div className="font-caveat mb-1 text-2xl font-medium text-indigo-500 sm:mb-0">
                        The acquisitions
                    </div>
                    <div className="mb-1 flex flex-col items-start before:absolute before:left-2 before:h-full before:-translate-x-1/2 before:translate-y-3 before:self-start before:bg-slate-300 before:px-px after:absolute after:left-2 after:box-content after:h-2 after:w-2 after:-translate-x-1/2 after:translate-y-1.5 after:rounded-full after:border-4 after:border-slate-50 after:bg-indigo-600 group-last:before:hidden sm:flex-row sm:before:left-0 sm:before:ml-[6.5rem] sm:after:left-0 sm:after:ml-[6.5rem]">
                        <time className="left-0 mb-3 inline-flex h-6 w-20 translate-y-0.5 items-center justify-center rounded-full bg-emerald-100 text-xs font-semibold uppercase text-emerald-600 sm:absolute sm:mb-0">
                            May, 2022
                        </time>
                        <div className="text-xl font-bold text-slate-900">
                            Acquired various companies, inluding Technology Inc.
                        </div>
                    </div>
                    <div className="text-slate-500">
                        Pretium lectus quam id leo. Urna et pharetra pharetra
                        massa massa. Adipiscing enim eu neque aliquam vestibulum
                        morbi blandit cursus risus.
                    </div>
                </div>

                <div className="group relative py-6 pl-8 sm:pl-32">
                    <div className="font-caveat mb-1 text-2xl font-medium text-indigo-500 sm:mb-0">
                        The IPO
                    </div>
                    <div className="mb-1 flex flex-col items-start before:absolute before:left-2 before:h-full before:-translate-x-1/2 before:translate-y-3 before:self-start before:bg-slate-300 before:px-px after:absolute after:left-2 after:box-content after:h-2 after:w-2 after:-translate-x-1/2 after:translate-y-1.5 after:rounded-full after:border-4 after:border-slate-50 after:bg-indigo-600 group-last:before:hidden sm:flex-row sm:before:left-0 sm:before:ml-[6.5rem] sm:after:left-0 sm:after:ml-[6.5rem]">
                        <time className="left-0 mb-3 inline-flex h-6 w-20 translate-y-0.5 items-center justify-center rounded-full bg-emerald-100 text-xs font-semibold uppercase text-emerald-600 sm:absolute sm:mb-0">
                            May, 2023
                        </time>
                        <div className="text-xl font-bold text-slate-900">
                            Acme went public at the New York Stock Exchange
                        </div>
                    </div>
                    <div className="text-slate-500">
                        Pretium lectus quam id leo. Urna et pharetra pharetra
                        massa massa. Adipiscing enim eu neque aliquam vestibulum
                        morbi blandit cursus risus.
                    </div>
                </div>
            </div> */}
        </PageLayout>
    );
};

export default WorkExperience;
