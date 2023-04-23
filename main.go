package main

import (
    "net/http"
)

func main() {
    // Serve index.html file
    http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
        http.ServeFile(w, r, "index.html")
    })

    http.HandleFunc("/feedback", func(w http.ResponseWriter, r *http.Request){
        http.sser
    })
 
    // Serve static files in "static" directory
    http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("static"))))

    // Start server
    http.ListenAndServe(":8080", nil)
}
