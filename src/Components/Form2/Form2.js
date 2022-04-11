import React, {useContext, useState} from 'react'
import {Context} from '../../Context/Context'
import './Form2.css'


export default function Form2(event) {
    function droppingFiles() {


        let dropArea = document.getElementById('drop-area')

        dropArea.addEventListener("drop", highlight, false)


        //     ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        //     dropArea.addEventListener(eventName, preventDefaults, false)
        // })

        //     ['dragenter', 'dragover'].forEach(eventName => {
        //     dropArea.addEventListener(eventName, highlight, false)
        // })
        //
        //     ['dragleave', 'drop'].forEach(eventName => {
        //     dropArea.addEventListener(eventName, unhighlight, false)
        // })

        function highlight(e) {
            dropArea.classList.add('highlight')
        }

        function unhighlight(e) {
            dropArea.classList.remove('highlight')
        }


        function preventDefaults(e) {
            e.preventDefault()
            e.stopPropagation()
        }

        dropArea.addEventListener('drop', handleDrop, false)

        function handleDrop(e) {
            let dt = e.dataTransfer
            let files = dt.files

            handleFiles(files)
        }

        function handleFiles(files) {
            ([...files]).forEach(uploadFile)
        }

        function uploadFile(file) {
            let url = 'YOUR URL HERE'
            let formData = new FormData()

            formData.append('file', file)

            fetch(url, {
                method: 'POST',
                body: formData
            })
                .then(() => { /* Done. Inform the user */
                })
                .catch(() => { /* Error. Inform the user */
                })
        }

        function uploadFile(file) {
            var url = 'YOUR URL HERE'
            var xhr = new XMLHttpRequest()
            var formData = new FormData()
            xhr.open('POST', url, true)

            xhr.addEventListener('readystatechange', function (e) {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    // Done. Inform the user
                } else if (xhr.readyState == 4 && xhr.status != 200) {
                    // Error. Inform the user
                }
            })

            formData.append('file', file)
            xhr.send(formData)
        }

        function previewFile(file) {
            let reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onloadend = function () {
                let img = document.createElement('img')
                img.src = reader.result
                document.getElementById('gallery').appendChild(img)
            }
        }

        function handleFiles(files) {
            files = [...files]
            files.forEach(uploadFile)
            files.forEach(previewFile)
        }

        let filesDone = 0
        let filesToDo = 0
        let progressBar = document.getElementById('progress-bar')


        function initializeProgress(numfiles) {
            progressBar.value = 0
            filesDone = 0
            filesToDo = numfiles
        }

        function progressDone() {
            filesDone++
            progressBar.value = filesDone / filesToDo * 100
        }


        function handleFiles(files) {
            files = [...files]
            initializeProgress(files.length) // <- Add this line
            files.forEach(uploadFile)
            files.forEach(previewFile)
        }

        function uploadFile(file) {
            let url = 'YOUR URL HERE'
            let formData = new FormData()

            formData.append('file', file)

            fetch(url, {
                method: 'POST',
                body: formData
            })
                .then(progressDone) // <- Add `progressDone` call here
                .catch(() => { /* Error. Inform the user */
                })
        }

        let uploadProgress = []

        function initializeProgress(numFiles) {
            progressBar.value = 0
            uploadProgress = []

            for (let i = numFiles; i > 0; i--) {
                uploadProgress.push(0)
            }
        }

        function updateProgress(fileNumber, percent) {
            uploadProgress[fileNumber] = percent
            let total = uploadProgress.reduce((tot, curr) => tot + curr, 0) / uploadProgress.length
            progressBar.value = total
        }


        function uploadFile(file, i) { // <- Add `i` parameter
            var url = 'YOUR URL HERE'
            var xhr = new XMLHttpRequest()
            var formData = new FormData()
            xhr.open('POST', url, true)

            // Add following event listener
            xhr.upload.addEventListener("progress", function (e) {
                updateProgress(i, (e.loaded * 100.0 / e.total) || 100)
            })

            xhr.addEventListener('readystatechange', function (e) {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    // Done. Inform the user
                } else if (xhr.readyState == 4 && xhr.status != 200) {
                    // Error. Inform the user
                }
            })

            formData.append('file', file)
            xhr.send(formData)
        }

    }

    return (
        <div id="drop-area">
            <form className="my-form">
                <p>Upload multiple files with the file dialog or by dragging and dropping images onto the dashed
                    region</p>
                <input type="file" id="fileElem" multiple accept="image/*" onChange="handleFiles(this.files)"
                       onChange={droppingFiles}/>
                <label className="button" htmlFor="fileElem">Select some files</label>
            </form>
            <progress id="progress-bar" max={100} value={0}></progress>

            <div id="gallery"></div>
        </div>
    )
}