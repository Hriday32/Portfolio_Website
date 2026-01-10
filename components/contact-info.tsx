"use client";

import { Mail, Github, Linkedin, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function ContactInfo() {
    return (
        <div className="space-y-6">
            <Card>
                <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Mail className="text-blue-600 dark:text-blue-400" size={24} />
                        </div>
                        <div>
                            <h3 className="font-semibold mb-1">Email</h3>
                            <a
                                href="mailto:your.email@example.com"
                                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
                            >
                                itsmeramhriday@gmail.com
                            </a>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Github className="text-gray-900 dark:text-white" size={24} />
                        </div>
                        <div>
                            <h3 className="font-semibold mb-1">GitHub</h3>
                            <a
                                href="https://github.com/Hriday32"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
                            >
                                github.com/RamHriday
                            </a>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Linkedin className="text-blue-600 dark:text-blue-400" size={24} />
                        </div>
                        <div>
                            <h3 className="font-semibold mb-1">LinkedIn</h3>
                            <a
                                href="https://www.linkedin.com/in/ram-hriday-mahato"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
                            >
                                linkedin.com/in/Ram Hriday Mahato
                            </a>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center flex-shrink-0">
                            <MapPin className="text-green-600 dark:text-green-400" size={24} />
                        </div>
                        <div>
                            <h3 className="font-semibold mb-1">Location</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                                Kathmandu, Nepal
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
