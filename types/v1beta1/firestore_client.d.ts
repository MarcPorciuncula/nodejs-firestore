/*!
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/// <reference types="node" />
import * as gax from 'google-gax';
import {
  Callback,
  CallOptions,
  Descriptors,
  ClientOptions,
  PaginationCallback,
} from 'google-gax';
import {Transform} from 'stream';
import * as protos from '../protos/firestore_v1beta1_proto_api';
/**
 *  The Cloud Firestore service.
 *
 *  This service exposes several types of comparable timestamps:
 *
 *  *    `create_time` - The time at which a document was created. Changes only
 *       when a document is deleted, then re-created. Increases in a strict
 *        monotonic fashion.
 *  *    `update_time` - The time at which a document was last updated. Changes
 *       every time a document is modified. Does not change when a write results
 *       in no modifications. Increases in a strict monotonic fashion.
 *  *    `read_time` - The time at which a particular state was observed. Used
 *       to denote a consistent snapshot of the database or the time at which a
 *       Document was observed to not exist.
 *  *    `commit_time` - The time at which the writes in a transaction were
 *       committed. Any read with an equal or greater `read_time` is guaranteed
 *       to see the effects of the transaction.
 * @class
 * @deprecated Use v1/firestore_client instead.
 * @memberof v1beta1
 */
export declare class FirestoreClient {
  private _terminated;
  private _opts;
  private _gaxModule;
  private _gaxGrpc;
  private _protos;
  private _defaults;
  auth: gax.GoogleAuth;
  descriptors: Descriptors;
  innerApiCalls: {
    [name: string]: Function;
  };
  firestoreStub?: Promise<{
    [name: string]: Function;
  }>;
  /**
   * Construct an instance of FirestoreClient.
   *
   * @param {object} [options] - The configuration object.
   * The options accepted by the constructor are described in detail
   * in [this document](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#creating-the-client-instance).
   * The common options are:
   * @param {object} [options.credentials] - Credentials object.
   * @param {string} [options.credentials.client_email]
   * @param {string} [options.credentials.private_key]
   * @param {string} [options.email] - Account email address. Required when
   *     using a .pem or .p12 keyFilename.
   * @param {string} [options.keyFilename] - Full path to the a .json, .pem, or
   *     .p12 key downloaded from the Google Developers Console. If you provide
   *     a path to a JSON file, the projectId option below is not necessary.
   *     NOTE: .pem and .p12 require you to specify options.email as well.
   * @param {number} [options.port] - The port on which to connect to
   *     the remote host.
   * @param {string} [options.projectId] - The project ID from the Google
   *     Developer's Console, e.g. 'grape-spaceship-123'. We will also check
   *     the environment variable GCLOUD_PROJECT for your project ID. If your
   *     app is running in an environment which supports
   *     {@link https://developers.google.com/identity/protocols/application-default-credentials Application Default Credentials},
   *     your project ID will be detected automatically.
   * @param {string} [options.apiEndpoint] - The domain name of the
   *     API remote host.
   * @param {gax.ClientConfig} [options.clientConfig] - Client configuration override.
   *     Follows the structure of {@link gapicConfig}.
   * @param {boolean} [options.fallback] - Use HTTP fallback mode.
   *     In fallback mode, a special browser-compatible transport implementation is used
   *     instead of gRPC transport. In browser context (if the `window` object is defined)
   *     the fallback mode is enabled automatically; set `options.fallback` to `false`
   *     if you need to override this behavior.
   */
  constructor(opts?: ClientOptions);
  /**
   * Initialize the client.
   * Performs asynchronous operations (such as authentication) and prepares the client.
   * This function will be called automatically when any class method is called for the
   * first time, but if you need to initialize it before calling an actual method,
   * feel free to call initialize() directly.
   *
   * You can await on this method if you want to make sure the client is initialized.
   *
   * @returns {Promise} A promise that resolves to an authenticated service stub.
   */
  initialize(): Promise<{
    [name: string]: Function;
  }>;
  /**
   * The DNS address for this API service.
   * @returns {string} The DNS address for this service.
   */
  static get servicePath(): string;
  /**
   * The DNS address for this API service - same as servicePath(),
   * exists for compatibility reasons.
   * @returns {string} The DNS address for this service.
   */
  static get apiEndpoint(): string;
  /**
   * The port for this API service.
   * @returns {number} The default port for this service.
   */
  static get port(): number;
  /**
   * The scopes needed to make gRPC calls for every method defined
   * in this service.
   * @returns {string[]} List of default scopes.
   */
  static get scopes(): string[];
  getProjectId(): Promise<string>;
  getProjectId(callback: Callback<string, undefined, undefined>): void;
  getDocument(
    request: protos.google.firestore.v1beta1.IGetDocumentRequest,
    options?: CallOptions
  ): Promise<
    [
      protos.google.firestore.v1beta1.IDocument,
      protos.google.firestore.v1beta1.IGetDocumentRequest | undefined,
      {} | undefined
    ]
  >;
  getDocument(
    request: protos.google.firestore.v1beta1.IGetDocumentRequest,
    options: CallOptions,
    callback: Callback<
      protos.google.firestore.v1beta1.IDocument,
      protos.google.firestore.v1beta1.IGetDocumentRequest | null | undefined,
      {} | null | undefined
    >
  ): void;
  getDocument(
    request: protos.google.firestore.v1beta1.IGetDocumentRequest,
    callback: Callback<
      protos.google.firestore.v1beta1.IDocument,
      protos.google.firestore.v1beta1.IGetDocumentRequest | null | undefined,
      {} | null | undefined
    >
  ): void;
  createDocument(
    request: protos.google.firestore.v1beta1.ICreateDocumentRequest,
    options?: CallOptions
  ): Promise<
    [
      protos.google.firestore.v1beta1.IDocument,
      protos.google.firestore.v1beta1.ICreateDocumentRequest | undefined,
      {} | undefined
    ]
  >;
  createDocument(
    request: protos.google.firestore.v1beta1.ICreateDocumentRequest,
    options: CallOptions,
    callback: Callback<
      protos.google.firestore.v1beta1.IDocument,
      protos.google.firestore.v1beta1.ICreateDocumentRequest | null | undefined,
      {} | null | undefined
    >
  ): void;
  createDocument(
    request: protos.google.firestore.v1beta1.ICreateDocumentRequest,
    callback: Callback<
      protos.google.firestore.v1beta1.IDocument,
      protos.google.firestore.v1beta1.ICreateDocumentRequest | null | undefined,
      {} | null | undefined
    >
  ): void;
  updateDocument(
    request: protos.google.firestore.v1beta1.IUpdateDocumentRequest,
    options?: CallOptions
  ): Promise<
    [
      protos.google.firestore.v1beta1.IDocument,
      protos.google.firestore.v1beta1.IUpdateDocumentRequest | undefined,
      {} | undefined
    ]
  >;
  updateDocument(
    request: protos.google.firestore.v1beta1.IUpdateDocumentRequest,
    options: CallOptions,
    callback: Callback<
      protos.google.firestore.v1beta1.IDocument,
      protos.google.firestore.v1beta1.IUpdateDocumentRequest | null | undefined,
      {} | null | undefined
    >
  ): void;
  updateDocument(
    request: protos.google.firestore.v1beta1.IUpdateDocumentRequest,
    callback: Callback<
      protos.google.firestore.v1beta1.IDocument,
      protos.google.firestore.v1beta1.IUpdateDocumentRequest | null | undefined,
      {} | null | undefined
    >
  ): void;
  deleteDocument(
    request: protos.google.firestore.v1beta1.IDeleteDocumentRequest,
    options?: CallOptions
  ): Promise<
    [
      protos.google.protobuf.IEmpty,
      protos.google.firestore.v1beta1.IDeleteDocumentRequest | undefined,
      {} | undefined
    ]
  >;
  deleteDocument(
    request: protos.google.firestore.v1beta1.IDeleteDocumentRequest,
    options: CallOptions,
    callback: Callback<
      protos.google.protobuf.IEmpty,
      protos.google.firestore.v1beta1.IDeleteDocumentRequest | null | undefined,
      {} | null | undefined
    >
  ): void;
  deleteDocument(
    request: protos.google.firestore.v1beta1.IDeleteDocumentRequest,
    callback: Callback<
      protos.google.protobuf.IEmpty,
      protos.google.firestore.v1beta1.IDeleteDocumentRequest | null | undefined,
      {} | null | undefined
    >
  ): void;
  beginTransaction(
    request: protos.google.firestore.v1beta1.IBeginTransactionRequest,
    options?: CallOptions
  ): Promise<
    [
      protos.google.firestore.v1beta1.IBeginTransactionResponse,
      protos.google.firestore.v1beta1.IBeginTransactionRequest | undefined,
      {} | undefined
    ]
  >;
  beginTransaction(
    request: protos.google.firestore.v1beta1.IBeginTransactionRequest,
    options: CallOptions,
    callback: Callback<
      protos.google.firestore.v1beta1.IBeginTransactionResponse,
      | protos.google.firestore.v1beta1.IBeginTransactionRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): void;
  beginTransaction(
    request: protos.google.firestore.v1beta1.IBeginTransactionRequest,
    callback: Callback<
      protos.google.firestore.v1beta1.IBeginTransactionResponse,
      | protos.google.firestore.v1beta1.IBeginTransactionRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): void;
  commit(
    request: protos.google.firestore.v1beta1.ICommitRequest,
    options?: CallOptions
  ): Promise<
    [
      protos.google.firestore.v1beta1.ICommitResponse,
      protos.google.firestore.v1beta1.ICommitRequest | undefined,
      {} | undefined
    ]
  >;
  commit(
    request: protos.google.firestore.v1beta1.ICommitRequest,
    options: CallOptions,
    callback: Callback<
      protos.google.firestore.v1beta1.ICommitResponse,
      protos.google.firestore.v1beta1.ICommitRequest | null | undefined,
      {} | null | undefined
    >
  ): void;
  commit(
    request: protos.google.firestore.v1beta1.ICommitRequest,
    callback: Callback<
      protos.google.firestore.v1beta1.ICommitResponse,
      protos.google.firestore.v1beta1.ICommitRequest | null | undefined,
      {} | null | undefined
    >
  ): void;
  rollback(
    request: protos.google.firestore.v1beta1.IRollbackRequest,
    options?: CallOptions
  ): Promise<
    [
      protos.google.protobuf.IEmpty,
      protos.google.firestore.v1beta1.IRollbackRequest | undefined,
      {} | undefined
    ]
  >;
  rollback(
    request: protos.google.firestore.v1beta1.IRollbackRequest,
    options: CallOptions,
    callback: Callback<
      protos.google.protobuf.IEmpty,
      protos.google.firestore.v1beta1.IRollbackRequest | null | undefined,
      {} | null | undefined
    >
  ): void;
  rollback(
    request: protos.google.firestore.v1beta1.IRollbackRequest,
    callback: Callback<
      protos.google.protobuf.IEmpty,
      protos.google.firestore.v1beta1.IRollbackRequest | null | undefined,
      {} | null | undefined
    >
  ): void;
  /**
   * Gets multiple documents.
   *
   * Documents returned by this method are not guaranteed to be returned in the
   * same order that they were requested.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.database
   *   Required. The database name. In the format:
   *   `projects/{project_id}/databases/{database_id}`.
   * @param {string[]} request.documents
   *   The names of the documents to retrieve. In the format:
   *   `projects/{project_id}/databases/{database_id}/documents/{document_path}`.
   *   The request will fail if any of the document is not a child resource of the
   *   given `database`. Duplicate names will be elided.
   * @param {google.firestore.v1beta1.DocumentMask} request.mask
   *   The fields to return. If not set, returns all fields.
   *
   *   If a document has a field that is not present in this mask, that field will
   *   not be returned in the response.
   * @param {Buffer} request.transaction
   *   Reads documents in a transaction.
   * @param {google.firestore.v1beta1.TransactionOptions} request.newTransaction
   *   Starts a new transaction and reads the documents.
   *   Defaults to a read-only transaction.
   *   The new transaction ID will be returned as the first response in the
   *   stream.
   * @param {google.protobuf.Timestamp} request.readTime
   *   Reads documents as they were at the given time.
   *   This may not be older than 60 seconds.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Stream}
   *   An object stream which emits [BatchGetDocumentsResponse]{@link google.firestore.v1beta1.BatchGetDocumentsResponse} on 'data' event.
   *   Please see the
   *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#server-streaming)
   *   for more details and examples.
   * @example
   * const stream = client.batchGetDocuments(request);
   * stream.on('data', (response) => { ... });
   * stream.on('end', () => { ... });
   */
  batchGetDocuments(
    request?: protos.google.firestore.v1beta1.IBatchGetDocumentsRequest,
    options?: CallOptions
  ): gax.CancellableStream;
  /**
   * Runs a query.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. The parent resource name. In the format:
   *   `projects/{project_id}/databases/{database_id}/documents` or
   *   `projects/{project_id}/databases/{database_id}/documents/{document_path}`.
   *   For example:
   *   `projects/my-project/databases/my-database/documents` or
   *   `projects/my-project/databases/my-database/documents/chatrooms/my-chatroom`
   * @param {google.firestore.v1beta1.StructuredQuery} request.structuredQuery
   *   A structured query.
   * @param {Buffer} request.transaction
   *   Reads documents in a transaction.
   * @param {google.firestore.v1beta1.TransactionOptions} request.newTransaction
   *   Starts a new transaction and reads the documents.
   *   Defaults to a read-only transaction.
   *   The new transaction ID will be returned as the first response in the
   *   stream.
   * @param {google.protobuf.Timestamp} request.readTime
   *   Reads documents as they were at the given time.
   *   This may not be older than 60 seconds.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Stream}
   *   An object stream which emits [RunQueryResponse]{@link google.firestore.v1beta1.RunQueryResponse} on 'data' event.
   *   Please see the
   *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#server-streaming)
   *   for more details and examples.
   * @example
   * const stream = client.runQuery(request);
   * stream.on('data', (response) => { ... });
   * stream.on('end', () => { ... });
   */
  runQuery(
    request?: protos.google.firestore.v1beta1.IRunQueryRequest,
    options?: CallOptions
  ): gax.CancellableStream;
  /**
   * Streams batches of document updates and deletes, in order.
   *
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Stream}
   *   An object stream which is both readable and writable. It accepts objects
   *   representing [WriteRequest]{@link google.firestore.v1beta1.WriteRequest} for write() method, and
   *   will emit objects representing [WriteResponse]{@link google.firestore.v1beta1.WriteResponse} on 'data' event asynchronously.
   *   Please see the
   *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#bi-directional-streaming)
   *   for more details and examples.
   * @example
   * const stream = client.write();
   * stream.on('data', (response) => { ... });
   * stream.on('end', () => { ... });
   * stream.write(request);
   * stream.end();
   */
  write(options?: CallOptions): gax.CancellableStream;
  /**
   * Listens to changes.
   *
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Stream}
   *   An object stream which is both readable and writable. It accepts objects
   *   representing [ListenRequest]{@link google.firestore.v1beta1.ListenRequest} for write() method, and
   *   will emit objects representing [ListenResponse]{@link google.firestore.v1beta1.ListenResponse} on 'data' event asynchronously.
   *   Please see the
   *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#bi-directional-streaming)
   *   for more details and examples.
   * @example
   * const stream = client.listen();
   * stream.on('data', (response) => { ... });
   * stream.on('end', () => { ... });
   * stream.write(request);
   * stream.end();
   */
  listen(options?: CallOptions): gax.CancellableStream;
  listDocuments(
    request: protos.google.firestore.v1beta1.IListDocumentsRequest,
    options?: CallOptions
  ): Promise<
    [
      protos.google.firestore.v1beta1.IDocument[],
      protos.google.firestore.v1beta1.IListDocumentsRequest | null,
      protos.google.firestore.v1beta1.IListDocumentsResponse
    ]
  >;
  listDocuments(
    request: protos.google.firestore.v1beta1.IListDocumentsRequest,
    options: CallOptions,
    callback: PaginationCallback<
      protos.google.firestore.v1beta1.IListDocumentsRequest,
      protos.google.firestore.v1beta1.IListDocumentsResponse | null | undefined,
      protos.google.firestore.v1beta1.IDocument
    >
  ): void;
  listDocuments(
    request: protos.google.firestore.v1beta1.IListDocumentsRequest,
    callback: PaginationCallback<
      protos.google.firestore.v1beta1.IListDocumentsRequest,
      protos.google.firestore.v1beta1.IListDocumentsResponse | null | undefined,
      protos.google.firestore.v1beta1.IDocument
    >
  ): void;
  /**
   * Equivalent to `method.name.toCamelCase()`, but returns a NodeJS Stream object.
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. The parent resource name. In the format:
   *   `projects/{project_id}/databases/{database_id}/documents` or
   *   `projects/{project_id}/databases/{database_id}/documents/{document_path}`.
   *   For example:
   *   `projects/my-project/databases/my-database/documents` or
   *   `projects/my-project/databases/my-database/documents/chatrooms/my-chatroom`
   * @param {string} request.collectionId
   *   Required. The collection ID, relative to `parent`, to list. For example: `chatrooms`
   *   or `messages`.
   * @param {number} request.pageSize
   *   The maximum number of documents to return.
   * @param {string} request.pageToken
   *   The `next_page_token` value returned from a previous List request, if any.
   * @param {string} request.orderBy
   *   The order to sort results by. For example: `priority desc, name`.
   * @param {google.firestore.v1beta1.DocumentMask} request.mask
   *   The fields to return. If not set, returns all fields.
   *
   *   If a document has a field that is not present in this mask, that field
   *   will not be returned in the response.
   * @param {Buffer} request.transaction
   *   Reads documents in a transaction.
   * @param {google.protobuf.Timestamp} request.readTime
   *   Reads documents as they were at the given time.
   *   This may not be older than 60 seconds.
   * @param {boolean} request.showMissing
   *   If the list should show missing documents. A missing document is a
   *   document that does not exist but has sub-documents. These documents will
   *   be returned with a key but will not have fields, {@link google.firestore.v1beta1.Document.create_time|Document.create_time},
   *   or {@link google.firestore.v1beta1.Document.update_time|Document.update_time} set.
   *
   *   Requests with `show_missing` may not specify `where` or
   *   `order_by`.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Stream}
   *   An object stream which emits an object representing [Document]{@link google.firestore.v1beta1.Document} on 'data' event.
   *   The client library will perform auto-pagination by default: it will call the API as many
   *   times as needed. Note that it can affect your quota.
   *   We recommend using `listDocumentsAsync()`
   *   method described below for async iteration which you can stop as needed.
   *   Please see the
   *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination)
   *   for more details and examples.
   */
  listDocumentsStream(
    request?: protos.google.firestore.v1beta1.IListDocumentsRequest,
    options?: CallOptions
  ): Transform;
  /**
   * Equivalent to `listDocuments`, but returns an iterable object.
   *
   * `for`-`await`-`of` syntax is used with the iterable to get response elements on-demand.
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. The parent resource name. In the format:
   *   `projects/{project_id}/databases/{database_id}/documents` or
   *   `projects/{project_id}/databases/{database_id}/documents/{document_path}`.
   *   For example:
   *   `projects/my-project/databases/my-database/documents` or
   *   `projects/my-project/databases/my-database/documents/chatrooms/my-chatroom`
   * @param {string} request.collectionId
   *   Required. The collection ID, relative to `parent`, to list. For example: `chatrooms`
   *   or `messages`.
   * @param {number} request.pageSize
   *   The maximum number of documents to return.
   * @param {string} request.pageToken
   *   The `next_page_token` value returned from a previous List request, if any.
   * @param {string} request.orderBy
   *   The order to sort results by. For example: `priority desc, name`.
   * @param {google.firestore.v1beta1.DocumentMask} request.mask
   *   The fields to return. If not set, returns all fields.
   *
   *   If a document has a field that is not present in this mask, that field
   *   will not be returned in the response.
   * @param {Buffer} request.transaction
   *   Reads documents in a transaction.
   * @param {google.protobuf.Timestamp} request.readTime
   *   Reads documents as they were at the given time.
   *   This may not be older than 60 seconds.
   * @param {boolean} request.showMissing
   *   If the list should show missing documents. A missing document is a
   *   document that does not exist but has sub-documents. These documents will
   *   be returned with a key but will not have fields, {@link google.firestore.v1beta1.Document.create_time|Document.create_time},
   *   or {@link google.firestore.v1beta1.Document.update_time|Document.update_time} set.
   *
   *   Requests with `show_missing` may not specify `where` or
   *   `order_by`.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Object}
   *   An iterable Object that allows [async iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols).
   *   When you iterate the returned iterable, each element will be an object representing
   *   [Document]{@link google.firestore.v1beta1.Document}. The API will be called under the hood as needed, once per the page,
   *   so you can stop the iteration when you don't need more results.
   *   Please see the
   *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination)
   *   for more details and examples.
   * @example
   * const iterable = client.listDocumentsAsync(request);
   * for await (const response of iterable) {
   *   // process response
   * }
   */
  listDocumentsAsync(
    request?: protos.google.firestore.v1beta1.IListDocumentsRequest,
    options?: CallOptions
  ): AsyncIterable<protos.google.firestore.v1beta1.IDocument>;
  listCollectionIds(
    request: protos.google.firestore.v1beta1.IListCollectionIdsRequest,
    options?: CallOptions
  ): Promise<
    [
      string[],
      protos.google.firestore.v1beta1.IListCollectionIdsRequest | null,
      protos.google.firestore.v1beta1.IListCollectionIdsResponse
    ]
  >;
  listCollectionIds(
    request: protos.google.firestore.v1beta1.IListCollectionIdsRequest,
    options: CallOptions,
    callback: PaginationCallback<
      protos.google.firestore.v1beta1.IListCollectionIdsRequest,
      | protos.google.firestore.v1beta1.IListCollectionIdsResponse
      | null
      | undefined,
      string
    >
  ): void;
  listCollectionIds(
    request: protos.google.firestore.v1beta1.IListCollectionIdsRequest,
    callback: PaginationCallback<
      protos.google.firestore.v1beta1.IListCollectionIdsRequest,
      | protos.google.firestore.v1beta1.IListCollectionIdsResponse
      | null
      | undefined,
      string
    >
  ): void;
  /**
   * Equivalent to `method.name.toCamelCase()`, but returns a NodeJS Stream object.
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. The parent document. In the format:
   *   `projects/{project_id}/databases/{database_id}/documents/{document_path}`.
   *   For example:
   *   `projects/my-project/databases/my-database/documents/chatrooms/my-chatroom`
   * @param {number} request.pageSize
   *   The maximum number of results to return.
   * @param {string} request.pageToken
   *   A page token. Must be a value from
   *   {@link google.firestore.v1beta1.ListCollectionIdsResponse|ListCollectionIdsResponse}.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Stream}
   *   An object stream which emits an object representing string on 'data' event.
   *   The client library will perform auto-pagination by default: it will call the API as many
   *   times as needed. Note that it can affect your quota.
   *   We recommend using `listCollectionIdsAsync()`
   *   method described below for async iteration which you can stop as needed.
   *   Please see the
   *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination)
   *   for more details and examples.
   */
  listCollectionIdsStream(
    request?: protos.google.firestore.v1beta1.IListCollectionIdsRequest,
    options?: CallOptions
  ): Transform;
  /**
   * Equivalent to `listCollectionIds`, but returns an iterable object.
   *
   * `for`-`await`-`of` syntax is used with the iterable to get response elements on-demand.
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. The parent document. In the format:
   *   `projects/{project_id}/databases/{database_id}/documents/{document_path}`.
   *   For example:
   *   `projects/my-project/databases/my-database/documents/chatrooms/my-chatroom`
   * @param {number} request.pageSize
   *   The maximum number of results to return.
   * @param {string} request.pageToken
   *   A page token. Must be a value from
   *   {@link google.firestore.v1beta1.ListCollectionIdsResponse|ListCollectionIdsResponse}.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Object}
   *   An iterable Object that allows [async iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols).
   *   When you iterate the returned iterable, each element will be an object representing
   *   string. The API will be called under the hood as needed, once per the page,
   *   so you can stop the iteration when you don't need more results.
   *   Please see the
   *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination)
   *   for more details and examples.
   * @example
   * const iterable = client.listCollectionIdsAsync(request);
   * for await (const response of iterable) {
   *   // process response
   * }
   */
  listCollectionIdsAsync(
    request?: protos.google.firestore.v1beta1.IListCollectionIdsRequest,
    options?: CallOptions
  ): AsyncIterable<string>;
  /**
   * Terminate the gRPC channel and close the client.
   *
   * The client will no longer be usable and all future behavior is undefined.
   * @returns {Promise} A promise that resolves when the client is closed.
   */
  close(): Promise<void>;
}
