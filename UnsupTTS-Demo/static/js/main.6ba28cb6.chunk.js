(this["webpackJsonpvoice-conversion"] = this["webpackJsonpvoice-conversion"] || []).push([[0], [, function(e, t, a) {}, , , , , , , , function(e, t, a) {
    e.exports = a(16)
}, , , , , function(e, t, a) {}, function(e, t, a) {}, function(e, t, a) {
    "use strict";
    a.r(t);
    var r = a(0),
        n = a.n(r),
        o = a(8),
        l = a.n(o);
    a(14), a(1);
    var s = function(e) {
        e.root, e.reverse;
        var t = e.title,
            a = e.u1,
            r = e.u2,
            o = e.u3;
        return n.a.createElement("div", {
            className: "wrapper"
        }, n.a.createElement("p", {
            className: "block-label"
        }, t), n.a.createElement("div", {
            className: "rowv"
        }, n.a.createElement("div", {
            className: "element"
        }, n.a.createElement("p", null, "Ground truth:"), n.a.createElement("audio", {
            controls: !0
        }, n.a.createElement("source", {
            src: a,
            type: "audio/wav"
        }), "Your browser does not support the audio element.")), n.a.createElement("div", {
            className: "element"
        }, n.a.createElement("p", null, "Unsupervised Tacotron 2:"), n.a.createElement("audio", {
            controls: !0
        }, n.a.createElement("source", {
            src: r,
            type: "audio/wav"
        }), "Your browser does not support the audio element.")),
        n.a.createElement("div", {
            className: "element"
        }, n.a.createElement("p", null, "Supervised Tacotron 2:"), n.a.createElement("audio", {
            controls: !0
        }, n.a.createElement("source", {
            src: o,
            type: "audio/wav"
        }), "Your browser does not support the audio element."))),
        n.a.createElement("div", {
            className: "rowv"
        }, n.a.createElement("div", {
            className: "element"
        }, n.a.createElement("audio", {
            controls: !0
        }, n.a.createElement("source", {
            src: e.u4,
            type: "audio/wav"
        }), "Your browser does not support the audio element.")), n.a.createElement("div", {
            className: "element"
        }, n.a.createElement("audio", {
            controls: !0
        }, n.a.createElement("source", {
            src: e.u5,
            type: "audio/wav"
        }), "Your browser does not support the audio element.")),
        n.a.createElement("div", {
            className: "element"
        }, n.a.createElement("audio", {
            controls: !0
        }, n.a.createElement("source", {
            src: e.u6,
            type: "audio/wav"
        }), "Your browser does not support the audio element."))),
        n.a.createElement("div", {
            className: "rowv"
        }, n.a.createElement("div", {
            className: "element"
        }, n.a.createElement("audio", {
            controls: !0
        }, n.a.createElement("source", {
            src: e.u7,
            type: "audio/wav"
        }), "Your browser does not support the audio element.")), n.a.createElement("div", {
            className: "element"
        }, n.a.createElement("audio", {
            controls: !0
        }, n.a.createElement("source", {
            src: e.u8,
            type: "audio/wav"
        }), "Your browser does not support the audio element.")),
        n.a.createElement("div", {
            className: "element"
        }, n.a.createElement("audio", {
            controls: !0
        }, n.a.createElement("source", {
            src: e.u9,
            type: "audio/wav"
        }), "Your browser does not support the audio element."))),
        n.a.createElement("div", {
            className: "rowv"
        }, n.a.createElement("div", {
            className: "element"
        }, n.a.createElement("audio", {
            controls: !0
        }, n.a.createElement("source", {
            src: e.u10,
            type: "audio/wav"
        }), "Your browser does not support the audio element.")), n.a.createElement("div", {
            className: "element"
        }, n.a.createElement("audio", {
            controls: !0
        }, n.a.createElement("source", {
            src: e.u11,
            type: "audio/wav"
        }), "Your browser does not support the audio element.")),
        n.a.createElement("div", {
            className: "element"
        }, n.a.createElement("audio", {
            controls: !0
        }, n.a.createElement("source", {
            src: e.u12,
            type: "audio/wav"
        }), "Your browser does not support the audio element."))),
        n.a.createElement("div", {
            className: "rowv"
        }, n.a.createElement("div", {
            className: "element"
        }, n.a.createElement("audio", {
            controls: !0
        }, n.a.createElement("source", {
            src: e.u13,
            type: "audio/wav"
        }), "Your browser does not support the audio element.")), n.a.createElement("div", {
            className: "element"
        }, n.a.createElement("audio", {
            controls: !0
        }, n.a.createElement("source", {
            src: e.u14,
            type: "audio/wav"
        }), "Your browser does not support the audio element.")),
        n.a.createElement("div", {
            className: "element"
        }, n.a.createElement("audio", {
            controls: !0
        }, n.a.createElement("source", {
            src: e.u15,
            type: "audio/wav"
        }), "Your browser does not support the audio element."))))
    };
    var u = function(e) {
        e.root, e.reverse;
        var t = e.title,
            a = e.u1,
            r = e.u2,
            o = e.u3,
            l = e.t1,
            s = e.t2;
        var githublink = n.a.createElement("a");
        var linktext = n.a.createTextNode("https://github.com/lwang114/UnsupTTS");
        githublink.appendChild(linktext);
        githublink.title = "https://github.com/lwang114/UnsupTTS";
        githublink.href = "https://github.com/lwang114/UnsupTTS";

        return n.a.createElement("div", {
            className: "wrapper"
        }, n.a.createElement("p", {
            className: "block-label"
        }, t), n.a.createElement("p", {
            style: {
                padding: "1em"
            }
        }, n.a.createElement("font", {
            style: {
                fontWeight: "bold"
            }
        }, "Source speech: "), n.a.createElement("font", {
            style: {
                fontStyle: "italic"
            }
        }, '"', l, '"')), n.a.createElement("p", {
            style: {
                padding: "1em"
            }
        }, n.a.createElement("font", {
            style: {
                fontWeight: "bold"
            }
        }, "Stretched word/phrase: "), n.a.createElement("font", {
            style: {
                fontStyle: "italic"
            }
        }, '"', s, '"')), n.a.createElement("div", {
            className: "rowv"
        }, n.a.createElement("div", {
            className: "element"
        }, n.a.createElement("p", null, "ABNORMAL:"), n.a.createElement("audio", {
            controls: !0
        }, n.a.createElement("source", {
            src: a,
            type: "audio/wav"
        }), "Your browser does not support the audio element.")), n.a.createElement("div", {
            className: "element"
        }, n.a.createElement("p", null, "RR"), n.a.createElement("audio", {
            controls: !0
        }, n.a.createElement("source", {
            src: r,
            type: "audio/wav"
        }), "Your browser does not support the audio element.")), n.a.createElement("div", {
            className: "element"
        }, n.a.createElement("p", null, "AutoPST(Proposed)"), n.a.createElement("audio", {
            controls: !0
        }, n.a.createElement("source", {
            src: o,
            type: "audio/wav"
        }), "Your browser does not support the audio element."))))
    };
    var _ = function(e) {
        e.root, e.reverse;
        var t = e.title,
            a = e.u1,
            r = (e.u2, e.u3),
            o = e.u4,
            l = e.u5;
        return n.a.createElement("div", {
            className: "wrapper"
        }, n.a.createElement("p", {
            className: "block-label"
        }, t), n.a.createElement("div", {
            className: "rowv"
        }, n.a.createElement("div", {
            className: "element"
        }, n.a.createElement("p", null, "Source speech:"), n.a.createElement("audio", {
            controls: !0
        }, n.a.createElement("source", {
            src: a,
            type: "audio/wav"
        }), "Your browser does not support the audio element."))), n.a.createElement("div", {
            className: "rowv"
        }, n.a.createElement("div", {
            className: "element"
        }, n.a.createElement("p", null, "AutoVC"), n.a.createElement("audio", {
            controls: !0
        }, n.a.createElement("source", {
            src: r,
            type: "audio/wav"
        }), "Your browser does not support the audio element.")), n.a.createElement("div", {
            className: "element"
        }, n.a.createElement("p", null, "RR"), n.a.createElement("audio", {
            controls: !0
        }, n.a.createElement("source", {
            src: o,
            type: "audio/wav"
        }), "Your browser does not support the audio element.")), n.a.createElement("div", {
            className: "element"
        }, n.a.createElement("p", null, "AutoPST(Proposed)"), n.a.createElement("audio", {
            controls: !0
        }, n.a.createElement("source", {
            src: l,
            type: "audio/wav"
        }), "Your browser does not support the audio element."))))
    };
    a(15);
    var c = function(e) {
        return n.a.createElement("div", {
            id: "main"
        }, n.a.createElement("div", {
            className: "main-inner"
        }, n.a.createElement("h1", {
            className: "main-title"
        }, "Unsupervised Text-to-Speech Synthesis by Unsupervised Automatic Speech Recognition:", n.a.createElement("font", {
            className: "blue"
        }, " Audio Demo")), n.a.createElement("div", {
            className: "introduction"
        }, n.a.createElement("p", null, "This demo webpage contains example audios generated by ", n.a.createElement("font", {
            className: "blue"
        }, "Unsupervised Tacotron 2"), ", which is an unsupervised text-to-speech synthesis (TTS) algorithm trained on", n.a.createElement("font", {
            className: "blue"
        }, " unpaired"), " speech and text data."), n.a.createElement("p", {
            style: {
                marginTop: "1.5em"
            }
        }, "In this demo, you will hear speech synthesis results between our ", n.a.createElement("font", {
            className: "blue"
        }, "unsupervised TTS system"), " and a ", n.a.createElement("font", {
            className: "blue"
        }, "supervised TTS sytem"), ". The generated utterances are from the following algorithms:"), n.a.createElement("ul", null, n.a.createElement("li", null, n.a.createElement("font", {
            className: "blue"
        }, "Unsupervised Tacotron 2"), " \u2013 The proposed unsupervised TTS algorithm trained without any paired speech and text data"), n.a.createElement("li", null, n.a.createElement("font", {
            className: "blue"
        }, "Supervised Tacotron 2"), " \u2013 A state-of-the-art supervised TTS algorithm trained with paired speech and text data."), n.a.createElement("li", null, n.a.createElement("font", {
            className: "blue"
        }, "Ground truth"), " \u2013 Ground truth speech utterance")), n.a.createElement("p", {
            style: {
                marginTop: "1.5em"
            }
        }, "For more information, please check our code at https://github.com/lwang114/UnsupTTS.")), n.a.createElement(s, {
            title: "English",
            u1: "./demo_results_eng/gt/LJ001-0001.wav",
            u2: "./demo_results_eng/unsup/LJ001-0001.wav_gen.wav",
            u3: "./demo_results_eng/sup/LJ001-0001.wav_gen.wav",
            u4: "./demo_results_eng/gt/LJ001-0002.wav",
            u5: "./demo_results_eng/unsup/LJ001-0002.wav_gen.wav",
            u6: "./demo_results_eng/sup/LJ001-0002.wav_gen.wav",
            u7: "./demo_results_eng/gt/LJ001-0004.wav",
            u8: "./demo_results_eng/unsup/LJ001-0004.wav_gen.wav",
            u9: "./demo_results_eng/sup/LJ001-0004.wav_gen.wav",
            u10: "./demo_results_eng/gt/LJ001-0005.wav",
            u11: "./demo_results_eng/unsup/LJ001-0005.wav_gen.wav",
            u12: "./demo_results_eng/sup/LJ001-0005.wav_gen.wav",
            u13: "./demo_results_eng/gt/LJ001-0008.wav",
            u14: "./demo_results_eng/unsup/LJ001-0008.wav_gen.wav",
            u15: "./demo_results_eng/sup/LJ001-0008.wav_gen.wav",
        }), n.a.createElement(s, {
            title: "Hungarian",
            u1: "./speech_examples/hu/gt/utt0000000003.wav",
            u2: "./speech_examples/hu/hifigan/utt0000000003_gen.wav",
            u3: "./speech_examples/hu/supervised/utt0000000003_gen.wav",
            u4: "./speech_examples/hu/gt/utt0000000042.wav",
            u5: "./speech_examples/hu/hifigan/utt0000000042_gen.wav",
            u6: "./speech_examples/hu/supervised/utt0000000042_gen.wav",
            u7: "./speech_examples/hu/gt/utt0000000040.wav",
            u8: "./speech_examples/hu/hifigan/utt0000000040_gen.wav",
            u9: "./speech_examples/hu/supervised/utt0000000040_gen.wav",
            u10: "./speech_examples/hu/gt/utt0000000020.wav",
            u11: "./speech_examples/hu/hifigan/utt0000000020_gen.wav",
            u12: "./speech_examples/hu/supervised/utt0000000020_gen.wav",
            u13: "./speech_examples/hu/gt/utt0000000009.wav",
            u14: "./speech_examples/hu/hifigan/utt0000000009_gen.wav",
            u15: "./speech_examples/hu/supervised/utt0000000009_gen.wav",
        }), n.a.createElement(s, {
            title: "Japanese",
            u1: "./speech_examples/ja/gt/utt0000000002.wav",
            u2: "./speech_examples/ja/hifigan/utt0000000002_gen.wav",
            u3: "./speech_examples/ja/supervised/utt0000000002_gen.wav",
            u4: "./speech_examples/ja/gt/utt0000000008.wav",
            u5: "./speech_examples/ja/hifigan/utt0000000008_gen.wav",
            u6: "./speech_examples/ja/supervised/utt0000000008_gen.wav",
            u7: "./speech_examples/ja/gt/utt0000000047.wav",
            u8: "./speech_examples/ja/hifigan/utt0000000047_gen.wav",
            u9: "./speech_examples/ja/supervised/utt0000000047_gen.wav",
            u10: "./speech_examples/ja/gt/utt0000000024.wav",
            u11: "./speech_examples/ja/hifigan/utt0000000024_gen.wav",
            u12: "./speech_examples/ja/supervised/utt0000000024_gen.wav",
            u13: "./speech_examples/ja/gt/utt0000000030.wav",
            u14: "./speech_examples/ja/hifigan/utt0000000030_gen.wav",
            u15: "./speech_examples/ja/supervised/utt0000000030_gen.wav",
        }), n.a.createElement(s, {
            title: "Dutch",
            u1: "./speech_examples/nl/gt/utt0000000014.wav",
            u2: "./speech_examples/nl/hifigan/utt0000000014_gen.wav",
            u3: "./speech_examples/nl/supervised/utt0000000014_gen.wav",
            u4: "./speech_examples/nl/gt/utt0000000016.wav",
            u5: "./speech_examples/nl/hifigan/utt0000000016_gen.wav",
            u6: "./speech_examples/nl/supervised/utt0000000016_gen.wav",
            u7: "./speech_examples/nl/gt/utt0000000043.wav",
            u8: "./speech_examples/nl/hifigan/utt0000000043_gen.wav",
            u9: "./speech_examples/nl/supervised/utt0000000043_gen.wav",
            u10: "./speech_examples/nl/gt/utt0000000059.wav",
            u11: "./speech_examples/nl/hifigan/utt0000000059_gen.wav",
            u12: "./speech_examples/nl/supervised/utt0000000059_gen.wav",
            u13: "./speech_examples/nl/gt/utt0000000028.wav",
            u14: "./speech_examples/nl/hifigan/utt0000000028_gen.wav",
            u15: "./speech_examples/nl/supervised/utt0000000028_gen.wav",
        }), n.a.createElement(s, {
            title: "German",
            u1: "./demo_results_de/gt/utt0000000020.wav",
            u2: "./demo_results_de/unsup/utt0000000020_gen.wav",
            u3: "./demo_results_de/sup/utt0000000020_gen.wav",
            u4: "./demo_results_de/gt/utt0000000027.wav",
            u5: "./demo_results_de/unsup/utt0000000027_gen.wav",
            u6: "./demo_results_de/sup/utt0000000027_gen.wav",
            u7: "./demo_results_de/gt/utt0000000033.wav",
            u8: "./demo_results_de/unsup/utt0000000033_gen.wav",
            u9: "./demo_results_de/sup/utt0000000033_gen.wav",
            u10: "./demo_results_de/gt/utt0000000044.wav",
            u11: "./demo_results_de/unsup/utt0000000044_gen.wav",
            u12: "./demo_results_de/sup/utt0000000044_gen.wav",
            u13: "./demo_results_de/gt/utt0000000070.wav",
            u14: "./demo_results_de/unsup/utt0000000070_gen.wav",
            u15: "./demo_results_de/sup/utt0000000070_gen.wav",
        }), n.a.createElement(s, {
            title: "Spanish",
            u1: "./speech_examples/es/selected/19demarzo_2285.wav",
            u2: "./speech_examples/es/selected/19demarzo_2285_unsup.wav",
            u3: "./speech_examples/es/selected/19demarzo_2285_sup.wav",
            u4: "./speech_examples/es/selected/batalla_arapiles_0964.wav",
            u5: "./speech_examples/es/selected/batalla_arapiles_0964_unsup.wav",
            u6: "./speech_examples/es/selected/batalla_arapiles_0964_sup.wav",
            u7: "./speech_examples/es/selected/batalla_arapiles_2659.wav",
            u8: "./speech_examples/es/selected/batalla_arapiles_2659_unsup.wav",
            u9: "./speech_examples/es/selected/batalla_arapiles_2659_sup.wav",
            u10: "./speech_examples/es/selected/batalla_arapiles_3415.wav",
            u11: "./speech_examples/es/selected/batalla_arapiles_3415_unsup.wav",
            u12: "./speech_examples/es/selected/batalla_arapiles_3415_sup.wav",
            u13: "./speech_examples/es/selected/batalla_arapiles_3638.wav",
            u14: "./speech_examples/es/selected/batalla_arapiles_3638_unsup.wav",
            u15: "./speech_examples/es/selected/batalla_arapiles_3638_sup.wav",
        }), n.a.createElement(s, {
            title: "Finnish",
            u1: "./speech_examples/fi/selected/gulliverin_matkat_kaukaisilla_mailla_0631.wav",
            u2: "./speech_examples/fi/selected/gulliverin_matkat_kaukaisilla_mailla_0631_unsup.wav",
            u3: "./speech_examples/fi/selected/gulliverin_matkat_kaukaisilla_mailla_0631_sup.wav",
            u4: "./speech_examples/fi/selected/gulliverin_matkat_kaukaisilla_mailla_1042.wav",
            u5: "./speech_examples/fi/selected/gulliverin_matkat_kaukaisilla_mailla_1042_unsup.wav",
            u6: "./speech_examples/fi/selected/gulliverin_matkat_kaukaisilla_mailla_1042_sup.wav",
            u7: "./speech_examples/fi/selected/gulliverin_matkat_kaukaisilla_mailla_1724.wav",
            u8: "./speech_examples/fi/selected/gulliverin_matkat_kaukaisilla_mailla_1724_unsup.wav",
            u9: "./speech_examples/fi/selected/gulliverin_matkat_kaukaisilla_mailla_1724_sup.wav",
            u10: "./speech_examples/fi/selected/gulliverin_matkat_kaukaisilla_mailla_2003.wav",
            u11: "./speech_examples/fi/selected/gulliverin_matkat_kaukaisilla_mailla_2003_unsup.wav",
            u12: "./speech_examples/fi/selected/gulliverin_matkat_kaukaisilla_mailla_2003_sup.wav",
            u13: "./speech_examples/fi/selected/salmelan_heinatalkoot_0322.wav",
            u14: "./speech_examples/fi/selected/salmelan_heinatalkoot_0322_unsup.wav",
            u15: "./speech_examples/fi/selected/salmelan_heinatalkoot_0322_sup.wav",
        })))
    };
    Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
    l.a.render(n.a.createElement(c, null), document.getElementById("wrapper")), "serviceWorker" in navigator && navigator.serviceWorker.ready.then((function(e) {
        e.unregister()
    }))
}], [[9, 1, 2]]]);
//# sourceMappingURL=main.6ba28cb6.chunk.js.map


