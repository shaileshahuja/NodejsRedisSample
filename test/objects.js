/**
 * Created by shaileshahuja on 18/3/17.
 */

process.env.NODE_ENV = 'test';

var request = require('supertest');
var app = require('../app.js');
var db = require('../config/db.js');

before(function (done) {
    db.flushdb(function () {
        done();
    });
});

var bigJson = '{"_id":"58cceee8bcfb6ef56f2523ed","index":0,"guid":"b5773713-661f-4c5b-b58c-06c7728cab32","isActive":true,"balance":"$2,891.40","picture":"http://placehold.it/32x32","age":24,"eyeColor":"green","name":"ClemonsHines","gender":"male","company":"IDEALIS","email":"clemonshines@idealis.com","phone":"+1(825)425-3790","address":"580NorfolkStreet,Orick,Hawaii,6287","about":"Doloreminimmagnaetsuntvelitidametculpavelitquisaliquipaliquip.Quisfugiatelitsuntexdoloredeserunt.Ullamcocupidatataliquipcupidatatnisi.\r\n","registered":"2014-04-23T06:55:52-08:00","latitude":39.863652,"longitude":-64.264175,"tags":["ea","fugiat","dolore","do","minim","consectetur","laboris"],"friends":[{"id":0,"name":"TraceyWilder"},{"id":1,"name":"DyerRose"},{"id":2,"name":"AngelineBarnett"}],"greeting":"Hello,ClemonsHines!Youhave7unreadmessages.","favoriteFruit":"apple"},{"_id":"58cceee804591981a176955b","index":1,"guid":"89b3f9eb-c65d-486d-a662-c88f6691ec7a","isActive":true,"balance":"$2,796.38","picture":"http://placehold.it/32x32","age":21,"eyeColor":"blue","name":"KathleenMartinez","gender":"female","company":"TALAE","email":"kathleenmartinez@talae.com","phone":"+1(830)548-3542","address":"271GatlingPlace,Chamizal,Ohio,5015","about":"Iddoconsequateaveniamesteiusmodetad.Sintiddolorofficiaofficianisiminimadinsiteaesseex.TempormagnaullamcoLoremmagnalaborisduisirureut.Minimadipisicingadipisicingvoluptateeiusmodoccaecatpariaturullamco.Temporullamcoeaminimexercitationveniamnonoccaecatquisdeseruntexmagna.\r\n","registered":"2014-06-15T02:01:56-08:00","latitude":56.117052,"longitude":-166.712783,"tags":["ullamco","occaecat","adipisicing","et","occaecat","irure","id"],"friends":[{"id":0,"name":"ParsonsMcmillan"},{"id":1,"name":"AnneCarlson"},{"id":2,"name":"VazquezNguyen"}],"greeting":"Hello,KathleenMartinez!Youhave5unreadmessages.","favoriteFruit":"banana"},{"_id":"58cceee8fe8e98fa22ff30d5","index":2,"guid":"9e305bcd-3db8-4916-8de1-1a1a7a3893c7","isActive":true,"balance":"$3,924.17","picture":"http://placehold.it/32x32","age":31,"eyeColor":"brown","name":"BeckerKeith","gender":"male","company":"FARMEX","email":"beckerkeith@farmex.com","phone":"+1(973)437-2823","address":"922BeverlyRoad,Weedville,Mississippi,6043","about":"Deseruntlaboreexsuntexreprehenderitcommodoelitcillum.Utincididuntcommodoenimcupidatatlaboriseaveniamculpamollit.EtadexcepteuretveniamreprehenderitreprehenderittemporLoremincididunt.\r\n","registered":"2016-09-20T11:45:49-08:00","latitude":14.36538,"longitude":-179.480181,"tags":["id","sit","eiusmod","qui","commodo","irure","enim"],"friends":[{"id":0,"name":"WoodsMueller"},{"id":1,"name":"RoachFrederick"},{"id":2,"name":"LindsayOliver"}],"greeting":"Hello,BeckerKeith!Youhave9unreadmessages.","favoriteFruit":"banana"},{"_id":"58cceee8b962ca6ca24629c1","index":3,"guid":"71009875-2a7b-4300-bc8d-0dca08580c38","isActive":false,"balance":"$1,350.24","picture":"http://placehold.it/32x32","age":23,"eyeColor":"blue","name":"WilliamKidd","gender":"male","company":"ATGEN","email":"williamkidd@atgen.com","phone":"+1(883)403-2977","address":"916WhittyLane,Cumminsville,Louisiana,4311","about":"EnimminimanimexercitationLoremreprehenderitsintveniamcillumconsequat.Irureconsequatenimvoluptatedolore.Eiusmodvoluptatereprehenderitreprehenderitconsequateavoluptate.Consequatmagnaquivelitaliqua.\r\n","registered":"2014-07-28T07:30:36-08:00","latitude":23.100633,"longitude":-54.168559,"tags":["anim","adipisicing","sint","in","officia","culpa","non"],"friends":[{"id":0,"name":"RoyAvila"},{"id":1,"name":"AliceHull"},{"id":2,"name":"MasseySkinner"}],"greeting":"Hello,WilliamKidd!Youhave2unreadmessages.","favoriteFruit":"apple"},{"_id":"58cceee86f89cfa7aed6f94b","index":4,"guid":"9dd5fc47-689b-46ae-aa40-cb58f2b505e8","isActive":true,"balance":"$2,632.18","picture":"http://placehold.it/32x32","age":23,"eyeColor":"blue","name":"KatrinaWaters","gender":"female","company":"ISOPLEX","email":"katrinawaters@isoplex.com","phone":"+1(847)477-2217","address":"686HendricksonStreet,Lutsen,RhodeIsland,4181","about":"Auteadipisicingpariaturmollitanimullamcooccaecatvoluptateullamco.Laborumcommodoreprehenderitpariaturestproidentametaliquiptemporsunt.Nostrudproidentirurenisinullalaborumcillumauteproidentproidentmagna.Duisvoluptateullamconullapariatur.Nullaelitcupidatatsuntfugiatutsuntvoluptateexercitationetcillummollit.ConsequatconsecteturiruredoloreLorempariaturlaborereprehenderitlaborumlaborealiquip.NonconsecteturnisinullaLoremaliquipvelitexvoluptateoccaecatdoloreofficiaquisreprehenderitminim.\r\n","registered":"2016-05-27T10:11:35-08:00","latitude":54.877456,"longitude":-67.811945,"tags":["tempor","adipisicing","excepteur","sint","pariatur","mollit","nulla"],"friends":[{"id":0,"name":"GeorgiaBooth"},{"id":1,"name":"JuarezCummings"},{"id":2,"name":"ThelmaLogan"}],"greeting":"Hello,KatrinaWaters!Youhave1unreadmessages.","favoriteFruit":"apple"},{"_id":"58cceee8be1ff1119f47bdc8","index":5,"guid":"b715edae-faab-493c-8fc3-09cc719b668b","isActive":true,"balance":"$2,667.69","picture":"http://placehold.it/32x32","age":40,"eyeColor":"brown","name":"GouldHeath","gender":"male","company":"ZORK","email":"gouldheath@zork.com","phone":"+1(805)552-3571","address":"701LloydStreet,Gordon,Wyoming,6551","about":"Reprehenderitullamcoeuveniamincididuntcillumcupidatatincididuntlaboreexcepteurculpalaborisenim.Adipisicingdoloroccaecatanimincididunttemporipsumestlaborisad.Ametnisitemporvelitlaborelaborumincididuntlaborumquiadipisicing.Fugiattemporexenimlaborumiddeseruntnon.\r\n","registered":"2017-01-20T08:24:42-08:00","latitude":-73.928096,"longitude":131.059269,"tags":["nulla","aute","fugiat","eu","ipsum","aute","Lorem"],"friends":[{"id":0,"name":"MarshRamos"},{"id":1,"name":"RosarioKnox"},{"id":2,"name":"MarksPatterson"}],"greeting":"Hello,GouldHeath!Youhave2unreadmessages.","favoriteFruit":"apple"},{"_id":"58cceee8b9d121c064b35875","index":6,"guid":"59eb9811-08bf-40b8-bc2a-b8f06f70813c","isActive":false,"balance":"$3,281.88","picture":"http://placehold.it/32x32","age":31,"eyeColor":"green","name":"KendraBeach","gender":"female","company":"KROG","email":"kendrabeach@krog.com","phone":"+1(904)458-2270","address":"190ChristopherAvenue,Dante,Washington,2569","about":"Animeiusmodfugiatexcupidatatauteeanonfugiat.Esseelitinnullaexvoluptateoccaecataliqua.Animinconsecteturesseduissitinfugiateiusmod.Ametproidentipsumlaboremagna.Dolorautevoluptatedolaborisaliquaveniamesseetaliquaconsectetur.Nonsuntdolorepariatursintexercitationadestiruredoloressetemporincididunt.Mollitincididuntenimametcommodopariatursitdeseruntidcupidatatnon.\r\n","registered":"2017-02-25T02:59:46-08:00","latitude":80.763767,"longitude":151.534424,"tags":["est","mollit","occaecat","pariatur","esse","ullamco","cupidatat"],"friends":[{"id":0,"name":"CrystalEvans"},{"id":1,"name":"GutierrezMarsh"},{"id":2,"name":"BondBarr"}],"greeting":"Hello,KendraBeach!Youhave10unreadmessages.","favoriteFruit":"banana"}';

describe('POST/GET /objects', function () {
    var dt0 = Date.now();
    it('should respond with 400', function (done) {
        request(app)
            .get('/objects/x')
            .set('Accept', 'application/json')
            .expect(400, done)
    });
    it('should respond with 200', function (done) {
        request(app)
            .post('/objects')
            .send({
                x: 'a'
            })
            .set('Accept', 'application/json')
            .expect(200, done)
    });
    it('should respond with posted value', function (done) {
        request(app)
            .post('/objects')
            .send({
                x: 'a'
            })
            .set('Accept', 'application/json')
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                request(app)
                    .get('/objects/x')
                    .set('Accept', 'application/json')
                    .expect(200, 'a', done)
            });
    });
    it('should respond with posted value and time', function (done) {
        request(app)
            .post('/objects')
            .send({
                x: 'a'
            })
            .set('Accept', 'application/json')
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                var dt1 = Date.now();
                request(app)
                    .get('/objects/x?timestamp=' + dt1)
                    .set('Accept', 'application/json')
                    .expect(200, 'a', done)
            });
    });
    it('should respond with 400 as wrong timestamp', function (done) {
        request(app)
            .get('/objects/x?timestamp=fsf')
            .set('Accept', 'application/json')
            .expect(400, done)
    });
    it('should respond with 400 as no key', function (done) {
        request(app)
            .get('/objects/')
            .set('Accept', 'application/json')
            .expect(400, done)
    });
    it('should respond with posted values in correct order', function (done) {
        request(app)
            .post('/objects')
            .send({
                x: 'a'
            })
            .set('Accept', 'application/json')
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                var dt1 = Date.now();
                request(app)
                    .post('/objects')
                    .send({
                        x: 'b'
                    })
                    .set('Accept', 'application/json')
                    .expect(200)
                    .end(function (err, res) {
                        if (err) return done(err);
                        var dt2 = Date.now();
                        request(app)
                            .post('/objects')
                            .send({
                                x: 'c'
                            })
                            .set('Accept', 'application/json')
                            .expect(200)
                            .end(function (err, res) {
                                if (err) return done(err);
                                var dt3 = Date.now();
                                request(app)
                                    .get('/objects/x?timestamp=' + dt0)
                                    .set('Accept', 'application/json')
                                    .expect(400);
                                request(app)
                                    .get('/objects/x?timestamp=' + dt1)
                                    .set('Accept', 'application/json')
                                    .expect(200, 'a');
                                request(app)
                                    .get('/objects/x?timestamp=' + dt2)
                                    .set('Accept', 'application/json')
                                    .expect(200, 'b');
                                request(app)
                                    .get('/objects/x?timestamp=' + dt3)
                                    .set('Accept', 'application/json')
                                    .expect(200, 'c', done);
                            });
                    });
            });
    });
    it('should respond with posted value with same number of colons', function (done) {
        request(app)
            .post('/objects')
            .send({
                x: 'a:b:c:::'
            })
            .set('Accept', 'application/json')
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                request(app)
                    .get('/objects/x')
                    .set('Accept', 'application/json')
                    .expect(200, 'a:b:c:::', done)
            });
    });
    it('should respond with 400 with multiple keys', function (done) {
        request(app)
            .post('/objects')
            .send({
                x: 'a', y: 'b'
            })
            .set('Accept', 'application/json')
            .expect(400, done)
    });
    it('should respond with 400 with no keys', function (done) {
        request(app)
            .post('/objects')
            .set('Accept', 'application/json')
            .expect(400, done)
    });
    it('should respond with 400 as invalid json', function (done) {
        request(app)
            .post('/objects')
            .send('{x: "a"}')
            .set('Accept', 'application/json')
            .expect(400, done)
    });
    it('should respond with 400 as key doesnt exist', function (done) {
        request(app)
            .get('/objects/abc')
            .set('Accept', 'application/json')
            .expect(400, done)
    });
    it('should respond with posted value', function (done) {
        request(app)
            .post('/objects')
            .send({
                big: bigJson
            })
            .set('Accept', 'application/json')
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                request(app)
                    .get('/objects/big')
                    .set('Accept', 'application/json')
                    .expect(200, bigJson, done)
            });
    });
});