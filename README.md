# Quran-CLI

A simple command line interface for listening to Quran.
## Used API
[mp3quran](https://mp3quran.net/eng/api)
## Installation
- run `npm install -g typescript` if you do not have typescript globally
- `npm install`
- Install **mpv** as it is required for playing the audio.
  - Debian based distributions
`sudo add-apt-repository ppa:mc3man/mpv-tests`
`sudo apt update && sudo apt install mpv`
  - Windows
[Follow This link](https://mpv.io/installation/#:~:text=master%20is%20recommended.-,Windows,-All%20binary%20packages)


## How to use
- To build the source code: `tsc`
- To show the version: `q-cli -v`
- To show help: `node  q-cli -h`
```
Quran-CLI

  Listen to the Quran from your terminal 

Options

  -n, --showRadio               Shows all available radio channels                                            
  -d, --radio number            Play specific radio                                                           
  -c, --reciterSurah number[]   lay specific surah by a specific reciter.                                     
                                If no surah specified, it will shows the available suras for the specified    
                                reciter.                                                                      
  -r, --showReciters            Shows all available reciters                                                  
  -s, --showSuras               Show all suras in the Quran                                                   
  -v, --version                 Shows the current version                                                     
  -h, --help                    Prints this usage guide                                                       

^_^

  Recall us in your doa'! 
```
- Show all available radios channels: `node  q-cli -n`
- Play specific radio: `node q-cli -d <radio index>`
- Show all available reciters: `node  q-cli -r`
- Play specific surah by a specific reciter: `node  q-cli -c <reciter index>  <surah index>`
- Show all available suras by a specific reciter : `node  q-cli -c <reciter index>`
- Show all suras in the Quran: `node  q-cli -s`

## Documentation
- 'sudo npm install -g jsdoc'
- 'jsdoc -d documentation *.js modes/**/*.js utilities/*.js'

  
## TODO
1. Add more detailed instructions.
2. Add unit tests.
3. publish as npm package. 
4. Add ability to show the verses/tafseer, ...
5. Reciter playlist mode.
6. Optimize CPU and data transfer.
7. Docker image if feasible.
8. Make a vs code extension.
9.  Configure the pipelines.
10. Documentation doesn't include sub-folders.
