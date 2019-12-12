import * as vscode from 'vscode';
import { openFile } from '../util';

type Uri = vscode.Uri;

const handler = async (uri: Uri) => {
    openFile(uri.fsPath);
};

const command: CommandModule = {
    identifier: 'open',
    handler,
};

export default command;
