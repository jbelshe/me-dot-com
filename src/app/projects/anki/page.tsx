'use client';

import Image from 'next/image';

export default function AnkiPage() {

    const codeLink = "https://github.com/jbelshe/anki-language-learner";
    return (
        <div className="min-h-screen max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm">

            <div className="relative mb-6">
                <h1 className="text-4xl font-bold text-center">Anki Flashcard ETL Pipeline</h1>
                <div className="absolute right-0 top-0">
                    <a
                        href="https://github.com/jbelshe/anki-language-learner"
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
                <p>The beauty of having a CS degree is that you can use it to make your life easier.</p>
                <br></br>
                <p>I like learning languages (200+ day Duo Lingo streak nbd).  What ways are there to get better at speaking a language?  Reading, writing, speaking, practicing.</p>
                <br></br>
                <p>For my practicing, I generally use a flashcard application called Anki that is popular among medical students.  The premise of the application is interval-based learning.  You do flashcards everyday and each time you get it right, the interval for when you receive the card next increases.</p>
                <br></br>
                <p>If you have a new card and get it right, it&apos;ll give it to you in 1 day.  If you get it right in 1 day, it&apos;ll give it to you in 4 days.  If you get it right in 4 days, it&apos;ll give it to you in 10 days, etc.  If you get the card wrong, it&apos;ll update the interval back to 1 days and you&apos;ll start your intervals for that card over.</p>
                <br></br>
                <p>I use this for language vocabulary.   I found the process of manually adding the cards to be cumbersome though. I also wanted to add audio files of my vocab words so that I could hear the proper pronunciation of the words.  I also wanted to be able to add content from different formats: csv files with words and their translations, Duo Lingo vocabs words, txt files with just english words to translate.</p>
                <br></br>
                <p>Luckily the application, Anki, that I use has an API. So I made a simple ETL (ETL = Extract Translate Load) Pipeline to do automate my card creation and upload for me.</p>
            </div>
            <div className="justify-center border-2 border-gray-200 mt-6 rounded p-4">
                <Image src="https://cdn.jackbelshe.com/images/projects/anki-etl/system_diagram.jpeg" alt="Anki ETL System Diagram" width={800} height={600}/>
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
                    <li><b>Anki Application:</b> Local hosted Anki Application accessed by AnkiConnect API</li>
                    <li><b>Python Script:</b> extracts words then coordinates word transformations and uploads to Anki.</li>
                    <li><b>Google gTTS:</b> API that converts text to speech</li>
                    <li><b>Google Translate:</b> API that translations text</li>
                    <li><b>OpenAI API:</b> used to correct word formatting and add articles</li>
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
                    <li><b>Language Choice:</b>. Language selected by user passed in as a script parameter</li>
                    <li><b>DuoLingo Words (html):</b>  Grab the html from DuoLingo website from Practice page</li>
                    <li><b>English Words (txt):</b>  List of English words to be translated</li>
                    <li><b>Manual Translations (txt):</b>  Foreign words with English translation separated by a delimiter</li>
                    <li><b>ChatGPT Files (csv):</b>  Foreign words and english translations generated with prompting</li>
                    <li><b>Existing Words (pkl):</b>  Dictionary of existing words to avoid repeats stored as a pickle file</li>

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
                    <li><b>Flashcards (json):</b>  Cards formatted and uploaded to Anki Application via AnkiConnect API</li>
                    <li><b>Audio Files (mp3):</b>  MP3 files generated using gTTS and moved to local Anki media folder</li>
                    <li><b>Execution Logs (txt):</b>  Generated on each run documenting words uploads succeeded or failed and why</li>
                    <li><b>File Archives (txt, csv, html):</b>  Stores input files just processed</li>
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
                    <li><b>gTTS:</b>  Python library for making calls to Google Text To Speech</li>
                    <li><b>requests:</b>  Python library used for API calls</li>
                    <li><b>openai:</b> library for making calls to openai</li>
                    <li><b>beautifulsoup4:</b>  library for parsing html </li>
                    <li><b>google-cloud-translate:</b>  library for making calls to google translate</li>
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
                    <p>To trigger the script to run, I just activate my python environment and run it my the local host from my terminal.  In the command lines, I input the desired language (example: “python3 translator.py German”)</p>
                    <br></br>
                    <p>Once the script is called, the operating directory is set based off of what language the script was called for (ex. German).  The script checks the “Input” folder to see what files exists.  If the files exist and are not empty, they are individually parsed to extract the words.</p><br></br>
                    <p>All input files provide words in a different format, so it is important to extract all relevant words and get them in a matching and appropriate format.  See the image below for the generalized flow of data and it&apos;s transformations as it goes through the system.</p>
                    <div className="justify-center border-2 border-gray-200 my-6 rounded p-4">
                        <Image src="https://cdn.jackbelshe.com/images/projects/anki-etl/inputs.jpeg" alt="Anki Flow" width={800} height={600} />
                        <p className="text-center mt-4">(Input file transformation flow)</p>
                    </div>
                    <p>Each input file requires different handling.  For the manual translations is in the correct format already since it was uploaded with its desired translation, so it just needs to be parsed according to what the delimiter is set to.  </p>
                    <br></br>
                    <p>Similarly, the ChatGPT generated vocab files (example prompt: give me a csv file of different foods in German with the german word first and the english word second) comes out in a predetermined format, so it simply needs to be parsed.</p>
                    <br></br>
                    <p>For the HTML file pulled from the DuoLingo website, the html is parsed using the python library, Beautiful Soup.  DuoLingo provides words + definitions, so these are safe to add to our list of words to add as is.  The English words file needs to be sent to the Google Translate API to get the appropriate translation.   Once the English words have their translations, they are sent along with the DuoLingo translations to the ChatGPT API.  The purpose of this is to ensure that nouns have the proper articles attached to them (ex. “Tree - Baum” becomes “the tree - der baum”).   </p>
                    <br></br>
                    <p>Once the input files have all been parsed properly and all the foreign word/english translations have been extracted and set up with the proper articles, we have our list of words to add.  We then send all of the foreign words to the gTTS API, which takes the requested language key (example German = “de”) and provides a pronunciation of the foreign word.  </p>
                    <br></br>
                    <p>We send the API a list of each of the words and receive a mp3 file for each with a specified name. We save these files to the output and save the name.  </p>
                    <br></br>
                    <p>Now we have all the information that we need to create out flashcards.  Using the foreign word, the english word, and the mp3 file name we can make our flashcard into the json format required by the Anki to upload flashcards.  Once created we upload all of the files to our local Anki Application using the AnkiConnect API and move the MP3 files to Anki’s media folder.</p>
                    <br></br>
                    <p>We now have all of our flashcards created and added with appropriate MP3 audio files available to play whenever selected on the app.  Ta-Da!</p>
                </ul>
            </details>

        </div >
    );
}