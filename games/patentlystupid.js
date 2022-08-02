(self.webpackChunkjackbox_tv = self.webpackChunkjackbox_tv || []).push([
    ["games/patentlystupid"], {
        41073: (t, e, o) => {
            "use strict";
            o.r(e), o.d(e, {
                MainView: () => L
            });
            var i = o(24340),
                a = o(13469),
                n = o.n(a),
                s = o(72316),
                l = o.n(s),
                r = o(86455),
                d = o.n(r),
                c = o(41393),
                p = o(24475),
                h = o(40543),
                u = o(63574),
                v = o.n(u),
                b = o(48886);
            const m = v().View.extend({
                    tagName: "div",
                    className: "list",
                    template: n().template('<ul class="nav nav-colors"> <li class="pull-left button-pad"> <div class="undoButton"> <button id="undoButton" class="undo button block">Annuler</button> </div> </li> <li class="pull-right button-pad"> <div id="colorPaletteList" class="colorPaletteListRegion pull-right"> </div> </li> </ul> '),
                    model: new(l().Model)({}),
                    regions: {
                        colorPaletteList: "#colorPaletteList"
                    },
                    triggers: {
                        "click #undoButton": "choose:undo"
                    },
                    bindings: {},
                    initialize() {
                        this.ColorPaletteComponent = this.ColorPaletteComponent || new b.N({
                            collection: new(l().Collection),
                            transparent: !0
                        }), this.listenTo(this.model, "change", this.update, this)
                    },
                    update() {
                        if (this.ColorPaletteComponent && this.ColorPaletteComponent.collection.set(this.model.get("colors")), this.model.get("currentColor")) {
                            const t = this.model.get("currentColor");
                            this.ColorPaletteComponent.collection.forEach((e => {
                                e.set("selected", e.get("hex") === t)
                            }))
                        }
                    },
                    onRender() {
                        this.showChildView("colorPaletteList", this.ColorPaletteComponent)
                    },
                    onChildviewChildviewPaletteSelect(t) {
                        this.triggerMethod("choose:color", t)
                    }
                }),
                y = c.d.extend({
                    events: n().extend({}, c.d.prototype.events, {
                        "click .info-button": "infoClick"
                    }),
                    initialize(t) {
                        this.toolbarComponent = this.toolbarComponent || new m, c.d.prototype.initialize.apply(this, [t])
                    },
                    update() {
                        c.d.prototype.update.apply(this), !this.cardShown && this.model.get("popup") && (this.cardShown = !0, this.infoClick())
                    },
                    sendInput(t) {
                        0 !== this.sketchpadComponent.getLines().length ? c.d.prototype.sendInput.apply(this, [t]) : h.b.show(Error("Vous devez dessiner quelque chose !"))
                    },
                    infoClick() {
                        d().fire({
                            html: "prompt",
                            customClass: {
                                popup: "inventionPrompt"
                            },
                            padding: 0,
                            background: "none",
                            showConfirmButton: !1,
                            showCloseButton: !0,
                            didOpen: () => {
                                this.textView = new p.y({
                                    el: ".inventionPrompt .swal2-html-container",
                                    model: new(l().Model)({}),
                                    template: n().template('<div class="text"></div>')
                                }), this.textView.model.set("html", this.model.get("popup").html), this.textView.model.set("className", `popupText Card ${this.model.get("popup").className}`), this.textView.render()
                            }
                        })
                    }
                });
            var g = o(9659),
                f = o(52650);
            const C = g.S.extend({
                    defaults: n().extend({}, f.W.prototype.model.defaults, {
                        strings: {
                            wait: "<div>VEUILLEZ PATIENTER !</div><div>Le séminaire va bientôt commencer</div>",
                            vip_waiting: "<div>Vous êtes le VIP!</div><div>En attente de tous les participants pour commencer !<div>",
                            vip_canStart: "<div>Vous êtes le VIP!</div><div>Appuyez sur ce bouton quand tous les participants sont prêts</div>",
                            vip_cancel: "<div>Vous êtes le VIP!</div><div>Appuyez sur ce bouton pour annuler le séminaire</div>",
                            vip_postgame: "<div>Vous êtes le VIP!</div><div>Voulez-vous organiser un autre séminaire?<div>",
                            vip_episodes_menu: "Menu des épisodes",
                            vip_episodes_unload: "Enlever l'épisode",
                            vip_episodes_report: "Signaler l'épisode",
                            vip_episodes_view_author: "Voir l'auteur",
                            button_start: "Tout le monde est là !",
                            button_cancel: "Annuler",
                            button_changename: "Changer de nom",
                            button_sameplayers: "Mêmes joueurs",
                            button_newplayers: "Nouveaux joueurs",
                            prompt_entername: "Entrez votre nom",
                            prompt_choosecharacter: "",
                            button_censorOptions: "Options de censure"
                        }
                    })
                }),
                w = f.W.extend({
                    model: new C({}),
                    bindings: n().extend({}, f.W.prototype.bindings, {
                        ".playerIcon": {
                            attributes: [{
                                name: "class",
                                observe: "playerInfo",
                                onGet: t => t ? t.avatar : null
                            }]
                        },
                        ".playerInitial": {
                            observe: "playerInfo",
                            onGet: t => t ? t.username.substr(0, 1) : null
                        },
                        ".playerName": {
                            observe: "playerInfo",
                            onGet: t => t ? t.username : null
                        }
                    }),
                    template: n().template('<div id="controller" class="state-controller controller-content"> <div id="avatar" class="playerIcon"> <span id="avatar-initial" class="playerInitial">A</span> </div> <div id="playerName" class="playerName">PlayerName</div> <div id="vipMenu" class="vipMenu"> <div id="choices" class="choicesContainer col-xs-12">choices</div> </div> <div id="characters" class="charactersContainer col-xs-12"></div> <div id="artifactId" class="artifactContainer text"> <a id="artifactLink" aria-label="Visit the Gallery" class="artifactLink" target="_blank"> <div class="artifactButton"></div> </a> </div> <div id="title" class="lobbyTitle">title</div> </div> ')
                });
            var x = o(97079),
                I = o(29014),
                P = o(49273);
            const k = P.r.extend({
                    template: n().template('<button type="button" class="button choice-button btn btn-lg"></button><p class="text help"></p><button data-action="censor" class="button censor-button btn btn-lg"></button>'),
                    className: "btn-block",
                    bindings: n().extend(P.r.prototype.bindings, {
                        ".help": {
                            observe: "help",
                            updateMethod: "html",
                            visible: !0,
                            updateView: !0
                        },
                        ".censor-button": {
                            observe: "censorable",
                            visible: !0,
                            visibleFn(t, e) {
                                e || t.remove()
                            },
                            attributes: [{
                                name: "data-index",
                                observe: "index"
                            }]
                        }
                    })
                }),
                _ = x.E.extend({
                    initialize(t) {
                        this.choicesList = this.choicesList || new I.C({
                            childView: k,
                            action: "button-group choose",
                            collection: new(l().Collection)
                        }), x.E.prototype.initialize.apply(this, [t])
                    }
                }),
                L = i.v.extend({
                    sessionModulePrefix: "PatentlyStupid",
                    parseBlob(t) {
                        return t.playerInfo && (t.playerInfo.hidden = !0), t.playerInfo && void 0 !== t.playerInfo.bgColor && (t.playerInfo.color = {
                            background: t.playerInfo.bgColor
                        }, t.playerInfo.bgColor = void 0), "Draw" === t.state && (t.controlStyle = "list", t.sketchOptions = {
                            minThickness: .5,
                            thicknessFactor: 0,
                            smoothingFactor: .55,
                            thicknessSmoothingFactor: .6,
                            dotMultiplier: 1,
                            tipTaperFactor: .7,
                            cappedEnds: !0
                        }, t.defaultIndex = 1), "EnterSingleText" === t.state && (t.block = !1, t.classes || (t.classes = [t.playerInfo.color.name])), t.artifact && (t.artifact.artifactId !== this.artifactId && (this.shouldHideArtifact = !1, this.artifactId = t.artifact.artifactId), "Lobby" !== t.state && "Logo" !== t.state && (this.shouldHideArtifact = !0), this.shouldHideArtifact && delete t.artifact), t.censorablePlayers && delete t.censorablePlayers, t
                    },
                    getGameLayout(t) {
                        switch (t) {
                            case "Draw":
                                return this.setLayout(y);
                            case "Lobby":
                                return this.setLayout(w);
                            case "MakeSingleChoice":
                                return this.setLayout(_);
                            default:
                                return -1
                        }
                    }
                })
        }
    }
]);
//# sourceMappingURL=sourcemaps/7263.c19266bd64940cc8584f.js.map