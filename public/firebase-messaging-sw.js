importScripts("https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js")
importScripts("https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js")

firebase.initializeApp({
    apiKey: "AIzaSyDoGGjSBgXD9UTnhQIWLHiw45pwb_RuQbk",
    authDomain: "messenger0-827bd.firebaseapp.com",
    projectId: "messenger0-827bd",
    storageBucket: "messenger0-827bd.firebasestorage.app",
    messagingSenderId: "942492422956",
    appId: "1:942492422956:web:329a05c3ee29f3b2761289",
    measurementId: "G-B7QF6X3V1T"
})

const messaging = firebase.messaging()

messaging.onBackgroundMessage((payload) => {

    console.log(payload)

    const title = payload.data.title || "Messenger 0"
    const body = payload.data.body || ""
    const type = payload.data.type || "chat"

    self.registration.showNotification(
        title,
        {
            body: body,
            icon: "/logo.png",
            tag: type === "call" ? "incoming-call" : undefined,
            renotify: type === "call"
        }
    )
})

self.addEventListener("notificationclick", (event) => {
    event.notification.close()

    event.waitUntil(
        clients.openWindow("/")
    )
})

self.addEventListener("install", (event) => {
    self.skipWaiting()
})

self.addEventListener("activate", (event) => {
    event.waitUntil(clients.claim())
})
