import React, { Component } from 'react';

class CourseDropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCourse: null,
            selectedSubCourse: null,
            courseDetails: {
                FrontEnd: {
                    subCourses: ['HTML', 'CSS', 'JavaScript'],
                    details: {
                        HTML: {
                            description: 'HTML is the standard markup language for creating web pages.',
                            roadmapImage: 'https://pbs.twimg.com/media/FHtKJT5XsAEgqYl?format=jpg&name=4096x4096',
                            roadmapVideo: "https://www.youtube.com/embed/BsDoLVMnmZs?si=LF9gxVOcF_TfO2Y5"
                        },
                        CSS: {
                            description: 'CSS is used for styling web pages.',
                            roadmapImage: 'https://pbs.twimg.com/media/E8WoO6FXMAM5niY?format=jpg&name=4096x4096',
                            roadmapVideo: "https://www.youtube.com/embed/Edsxf_NBFrw?si=TJ31uSrLEVNbQkFy"
                        },
                        JavaScript: {
                            description: 'JavaScript is a programming language for interactive web pages.',
                            roadmapImage: 'https://www.n-school.com/wp-content/uploads/2023/03/WhatsApp-Image-2023-03-10-at-13.17.49.jpg',
                            roadmapVideo: "https://www.youtube.com/embed/ER9SspLe4Hg?si=Zkbi1mu62yimO9In"
                        }
                    }
                },
                BackEnd: {
                    subCourses: ['Node.js', 'Express.js', 'Databases'],
                    details: {
                        'Node.js': {
                            description: 'Node.js allows executing JavaScript on the server-side.',
                            roadmapImage: 'https://www.codevertiser.com/static/d00b907ee9891f3b696ade37dc142010/5a190/roadmap-to-learn-nodejs.png',
                            roadmapVideo: "https://www.youtube.com/embed/BLl32FvcdVM?si=e6WTovt1SiR1hMqZ"
                        },
                        'Express.js': {
                            description: 'Express.js is a web application framework for Node.js.',
                            roadmapImage: 'https://example.com/expressjs-roadmap.jpg',
                            steps : [
                                "Introduction to Node.js",
                                "Basic Node.js Concepts and npm",
                                "Getting Started with Express.js",
                                "Routing and Middleware",
                                "Template Engines and Views",
                                "Working with Databases",
                                "RESTful APIs and JSON Handling",
                                "Authentication and Authorization",
                                "Error Handling and Debugging",
                                "Security Best Practices",
                                "Testing and Deployment",
                                "Performance Optimization",
                                "Continued Learning and Projects"
                              ],
                            roadmapVideo: "https://www.youtube.com/embed/7H_QH9nipNs?si=un9H0pduc_DzqHe4" 
                        },
                        'Databases': {
                            description: 'Databases store and organize data for web applications.',
                            roadmapImage: 'https://media.licdn.com/dms/image/D5612AQHhH4ZwmGQZDA/article-cover_image-shrink_720_1280/0/1679587564460?e=2147483647&v=beta&t=u_FIBBB_mIejegdV-SNwuwLOezZV8-bWwZV2RAaGOFY',
                            roadmapVideo: "https://www.youtube.com/embed/hlGoQC332VM?si=eYm1Dee9w6cF0at3"
                        }
                    }
                },
                FullStack: {
                    subCourses: ['React', 'MongoDB', 'RESTful APIs'],
                    details: {
                        React: {
                            description: 'React is a JavaScript library for building user interfaces.',
                            roadmapImage: 'https://99x.io/static/64ef447584d23613e23d9a2bfb37f441/3ceac/react-native-developer-roadmap-1.png',
                            roadmapVideo: "https://www.youtube.com/embed/-mJFZp84TIY?si=1wpwVvkyXJEvp7VH"

                        },
                        MongoDB: {
                            description: 'MongoDB is a NoSQL database program.',
                            "steps": [
                                "Understanding NoSQL and MongoDB Basics",
                                "Setting Up MongoDB",
                                "Data Modeling and CRUD Operations",
                                "Queries and Indexing",
                                "Aggregation Framework",
                                "Data Replication and Sharding",
                                "Data Modeling and Best Practices",
                                "Security and User Authentication",
                                "MongoDB Atlas and Cloud Deployment",
                                "Advanced Topics and Further Learning",
                                "Practice and Projects",
                                "Continuous Learning and Community Involvement"
                              ],
                            // roadmapImage: 'https://example.com/mongodb-roadmap.jpg',
                            roadmapVideo: "https://www.youtube.com/embed/oSIv-E60NiU?si=bVIaFKcX35MRgqFw"
                        },
                        'RESTful APIs': {
                            description: 'RESTful APIs allow communication between different systems over the internet.',
                            roadmapImage: 'https://www.slidegeeks.com/pics/dgm/l/a/API_Integration_Software_Development_API_Roadmap_With_Different_Time_Intervals_Themes_PDF_Slide_1.jpg',
                            roadmapVideo: "https://www.youtube.com/embed/ST8XxjOTIsg?si=cQvZD1LFbbxp8LMo"
                        }
                    }
                },
                Python: {
                    subCourses: ['Django', 'Flask', 'Data Analysis'],
                    details: {
                        Django: {
                            description: 'Django is a high-level Python web framework.',
                            roadmapImage: 'https://media.licdn.com/dms/image/C4D12AQGVX3-gle7uLQ/article-inline_image-shrink_400_744/0/1610563302768?e=1704931200&v=beta&t=sarcbL1ah7xBNovyJGwR3lFDy-nFyo_VfpPs0rM9Qa8',
                            roadmapVideo: "https://www.youtube.com/embed/Mezody4yiXw?si=yOWQV_DLFfRsFAMZ"
                        },
                        Flask: {
                            description: 'Flask is a lightweight web application framework.',
                            roadmapImage: 'https://pbs.twimg.com/media/EwbwtQXVoAcXD2V?format=jpg&name=4096x4096',
                            roadmapVideo: "https://www.youtube.com/embed/oA8brF3w5XQ?si=Py5ziBAbqcR4n4ch"
                        },
                        'Data Analysis': {
                            description: 'Python is commonly used for data analysis and visualization.',
                            roadmapImage: 'https://media.licdn.com/dms/image/D5612AQEfWLIn4xBJPg/article-cover_image-shrink_720_1280/0/1686232643398?e=2147483647&v=beta&t=yCdT3OSXo3w2GkqtftaV36os7-xEn5yy55U1YmG4Jpk',
                            roadmapVideo: "https://www.youtube.com/embed/M9rqo776gV8?si=GQw3W90AYAXLfyzo"
                        }
                    }
                }
            }
        };
    }

    handleCourseChange = (e) => {
        const selectedCourse = e.target.value;
        this.setState({
            selectedCourse,
            selectedSubCourse: null
        });
    };

    handleSubCourseChange = (e) => {
        const selectedSubCourse = e.target.value;
        this.setState({ selectedSubCourse });
    };

    render() {
        const { courseDetails, selectedCourse, selectedSubCourse } = this.state;

        return (
            <div className='RoadMapDataContainer'>
                <nav>
                    <ul>
                        {Object.keys(courseDetails).map((course) => (
                            <li key={course}>
                                <button onClick={() => this.handleCourseChange({ target: { value: course } })}>{course}</button>
                            </li>
                        ))}
                    </ul>
                </nav>

                {selectedCourse && (
                    <div className='SelectCourse'>
                        <label>Select a Sub Course:</label>
                        <select onChange={this.handleSubCourseChange}>
                            <option value="">Select</option>
                            {courseDetails[selectedCourse].subCourses.map((subCourse) => (
                                <option key={subCourse} value={subCourse}>
                                    {subCourse}
                                </option>
                            ))}
                        </select>
                    </div>
                )}

                {selectedSubCourse && (
                    <div className='Detail'>
                        <h3>Course Details:</h3>
                        <p>{courseDetails[selectedCourse].details[selectedSubCourse].description}</p>
                        <p>{courseDetails[selectedCourse].details[selectedSubCourse].steps}</p>
                        <img
                            src={courseDetails[selectedCourse].details[selectedSubCourse].roadmapImage}
                            alt={`${selectedSubCourse} Roadmap`}
                            style={{ maxWidth: '100%' }}
                        />
                        <div className='seprationTwoDiv spp'></div>
                        <div className='suggestion'><p>For you if you like to see video then:</p></div>
                        <div>
                        <iframe
                            width="410"
                            src={courseDetails[selectedCourse].details[selectedSubCourse].roadmapVideo}
                            title={`${selectedSubCourse} Roadmap`}
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                        </div>

                    </div>
                )}
            </div>
        );
    }
}

export default CourseDropdown;
