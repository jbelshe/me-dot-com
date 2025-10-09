'use client'

import Image from 'next/image';


export default function RSSPage() {
    const codeLink = "https://github.com/jbelshe/rss_substack_parser";
    return (
        <div className="min-h-screen max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm">

            <div className="relative mb-6">
                <h1 className="text-4xl font-bold text-center">Anki Flashcard ETL Pipeline</h1>
                <div className="absolute right-0 top-0">
                    <a
                        href={codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:text-gray-600 transition-colors"
                        aria-label="View on GitHub"
                    >
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.699 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                    </a>
                </div>
            </div>
            <br></br>
            <h2 className="text-2xl mt-6 font-bold">Project Summary</h2>
            <div className="mt-4">
                <p>What is the purpose of studying computer science?  To make simple things more complicated, (but to hopefully to save some time in the long run).</p>
                <br></br>
                <p>I have two blogs.  Both hosted on substack.  One is a travel blog, that I started writing at the beginning of 2025.  I started the year off backpacking and spent 6 months doing travel and writing about it.  The other is a tech blog, that I just recently started (writing this in October of 2025).  </p>
                <br></br>
                <p>I also recently started building this personal website and wanted to integrate my blogs posts into them.  I wanted to do a little more than just hyperlink to Substack, so I decided to make a project out of it.</p>
                <br></br>
                <p>RSS stands for “Really Simple Syndication” and is a feed that publishers normally keep the content they distribute.  What is generally in an RSS feed is essentially the data and metadata from posts formatted in XML.  It’s very common among news websites for instance.  You can see more examples here if you’re interested.   </p>
                <br></br>
                <p>Lucky for me, Substack has public RSS feeds for their blogs.  I was able to use this to parse out the important metadata from my blogs that I wanted to post on my website (title, header image, subtitle, link to substack).  Using this I was able to populate my website pages with data that mirrors what substack provides, but hosted on my own infrastructure.</p>
                <br></br>
                <p> An alternative to using the RSS page, is that I could have just parsed the individual blog post pages, but that would be a bit of a pain going to each page and defining each of the URLs in my script. RSS scripts are purposefully made for this so why not use them. </p>
                <br></br>
                <p>Now, I could have just done all this manually, but where’s the fun in that?</p>
                <br></br>
                <p>I decided to take it a step further and update my script into a cron job to check and automatically my website when I post new blogs.  I update the scripts implementation and packaged it up as a docker container and deployed it as an AWS Lambda function.  Using AWS EventBridge, I added logic to trigger the lambda once a day, so when I post a new blog on substack, it’ll identify the new post, parse the needed data from the file and update my datastores, so that my website’s blog sections will reflect the new substack posts.</p>
                <br></br>
                <p>Since this script should run without me having to manage it, I put in thorough logging and exception handling.  This way if an error occurs part of the script fails, I’ll have documentation as to where the error occurred so that I can trouble shoot and iterate.</p>
            </div>
            <div className="justify-center border-2 border-gray-200 mt-6 rounded p-4">
                <Image src="https://cdn.jackbelshe.com/images/projects/rss/system_diagram.png" alt="RSS ParserCron Job System Diagram" width={800} height={600} />
                <p className="text-center mt-4">(System Diagram)</p>
            </div>
            <details className="mt-6 border-2 border-gray-200 rounded p-4 group">
                <summary className="cursor-pointer flex items-center">
                    <h2 className="text-2xl font-bold">System Components</h2>
                    <svg className="w-6 h-6 ml-2 transform -rotate-90 transition-transform duration-200 group-open:rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </summary>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li><b>rss_script.py:</b>  parse .rss files for posts, upload data to DBs, packaged as docker container</li>
                    <li><b>Substack Servers:</b>  Serves .rss data and holds blog images</li>
                    <li><b>AWS Lambda:</b>  FaaS deployment of rss_script.py</li>
                    <li><b>Mongo DB:</b>  Data stores for blog post’s text metadata</li>
                    <li><b>AWS S3:</b>  Data store for blog images</li>
                    <li><b>AWS EventBridge:</b>  Execute cron job once a day</li>
                    <li><b>AWS CloudWatch:</b>  Logging </li>
                </ul>
            </details>
            <details className="mt-6 border-2 border-gray-200 rounded p-4 group">
                <summary className="cursor-pointer flex items-center">
                    <h2 className="text-2xl font-bold">Inputs</h2>
                    <svg className="w-6 h-6 ml-2 transform -rotate-90 transition-transform duration-200 group-open:rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </summary>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li><b>Substack .rss files:</b> Separate files for each blog</li>
                    <li><b>Substack Blog Post .html files:</b> HTML files for individual blog post</li>
                    <li><b>Substack Images:</b> Image files stored in substack CDN</li>
                </ul>
            </details>
            <details className="mt-6 border-2 border-gray-200 rounded p-4 group">
                <summary className="cursor-pointer flex items-center">
                    <h2 className="text-2xl font-bold">Outputs</h2>
                    <svg className="w-6 h-6 ml-2 transform -rotate-90 transition-transform duration-200 group-open:rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </summary>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li><b>Log Files:</b> Documents success or failures + errors</li>
                    <li><b>Images:</b> Downloaded images from substack</li>
                    <li><b>Metadata:</b> Parsed metadata from substack</li>
                </ul>
            </details>
            <details className="mt-6 border-2 border-gray-200 rounded p-4 group">
                <summary className="cursor-pointer flex items-center">
                    <h2 className="text-2xl font-bold">Dependencies</h2>
                    <svg className="w-6 h-6 ml-2 transform -rotate-90 transition-transform duration-200 group-open:rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </summary>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li><b>xml.etree:</b> parse xml in .rss files</li>
                    <li><b>requests:</b> handles http requests</li>
                    <li><b>BeautifulSoup:</b> Parse html</li>
                    <li><b>Boto3:</b> SDK for S3 </li>
                    <li><b>Pymongo:</b> Handles MongoDB interactions</li>
                </ul>
            </details>
            <details className="mt-6 border-2 border-gray-200 rounded p-4 group">
                <summary className="cursor-pointer flex items-center">
                    <h2 className="text-2xl font-bold">Code + High Level Program Description</h2>
                    <svg className="w-6 h-6 ml-2 transform -rotate-90 transition-transform duration-200 group-open:rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </summary>
                <ul className="list-disc space-y-2 mt-4">
                    <p>Code Accessible at: <a className='text-blue-600 underline hover:text-blue-800 transition-colors' href={codeLink}>{codeLink}</a></p>
                    <br></br>
                    <div className="justify-center border-2 border-gray-200 my-6 rounded p-4">
                        <Image src="https://cdn.jackbelshe.com/images/projects/rss/sequence_diagram.png" alt="Sequence Diagram" width={800} height={600} />
                        <p className="text-center mt-4">(RSS Parsing Sequence Diagram)</p>
                    </div>
                    <p>Alright, so the general flow for how this works, is each night at midnight pacific time, the cron job I have on AWS EventBridge gets triggered.  This has a nice internal wiring from EventBridge to Lambda since their both in the AWS ecosystem.  </p>
                    <br></br>
                    <p>The Lambda function is a docker container holding the python script that I have deployed with its necessary dependencies (see list above).  </p>
                    <br></br>
                    <p>The first thing the script must do is determine if there are any new posts.  Since it runs every night, the majority of executions will result in no actions taking place.  To check if there is a new post, the script sends a request to MongoDB and gets the most recent timestamp for the requested blog. </p>
                    <br></br>
                    <p>To determine if there has been a new blog post, the script retrieves the .rss file from the Substack endpoint.  It then parses the most recent blog post and compares the dates between the two posts.  If the post from the substack .rss file has a fresher timestamp, then it indicates that there is one or more new blog posts.  If this is not the case, there is no new data and the script can return true and shut down.</p>
                    <br></br>
                    <p>If there is a new post, this triggers the rest of the processing.  The .rss data continues to be parsed one post at a time, while the post is fresher than the most recent timestamp in MongoDB.  In the .rss file, the URL of the blog post is parsed and so is the URL of the post’s primary image.  The .html code is retrieved from the blog post’s URL and is parsed for further metadata.  This metadata along with the .rss metadata is packaged up and store in a MongoDB collection that is accessed by my personal website.  The image URL is then retrieved and the image is downloaded and streamed to the S3 bucket that I use for my website images.  </p>
                    <br></br>
                    <p>If all this goes smoothly, I log which new posts are created for each of my blogs (if any are) and an indication of success or failure.  These logs are automatically uploaded to CloudWatch after the lambda executes.</p>
                    <br></br>
                    <p>If the whole process was a success, then the following day after posting a new blog, the post should be reflected in my blog page on my website with the content being accurately served from MongoDB and S3.</p>
                    <br></br>
                </ul>
            </details>

        </div >
    );
}