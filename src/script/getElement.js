self.addEventListener('message', function(e) {
    var data = e.data;
    switch (data.cmd) {
        case 'start':
            // var webView = data.obj.querySelector("webview");
            webView.addEventListener("ipc-message", (event) => {
                // var xmlText = `
                //     <xml>
                //         <block type="_027" x="100" y="100">
                //             <field name="ID_ELE">` + event.channel + `</field>
                //         </block>
                //     </xml>`
                // var xml = Blockly.Xml.textToDom(xmlText);
                // Blockly.Xml.domToWorkspace(xml, workspace);
                console.log(event.channel);
                // console.log('wow')
            });
            webView.send("finder");
            console.log('check')
            break;
        case 'stop':
            self.close(); // Terminates the worker.
            break;
    };
}, false);