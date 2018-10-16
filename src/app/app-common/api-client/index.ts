import { Inject, Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import {
  Category,
  Comment,
  Customer,
  DataObject,
  Document,
  DocumentGroup,
  Operation,
  FieldModification,
  InputStream,
  Invitation,
  InvitationActivation,
  LoginAndPassword,
  Modification,
  Part,
  PasswordChangeRequest,
  Priority,
  ResourceReference,
  Session,
  SessionInformation,
  Status,
  Team,
  Template,
  Ticket,
  User
} from './models';

/**
* Created with angular4-swagger-client-generator.
*/
@Injectable()
export class ApiClientService {

  private domain = 'http://localhost:8889';

  constructor(private http: HttpClient, @Optional() @Inject('domain') domain: string ) {
    if (domain) {
      this.domain = domain;
    }
  }

  /**
  * Method getAll
  * @param IfModifiedSince If-Modified-Since
  * @param IfNoneMatch If-None-Match
  * @return Full HTTP response as Observable
  */
  public getAll(IfModifiedSince?: string, IfNoneMatch?: string): Observable<HttpResponse<Comment[]>> {
    const uri = `/comments/`;
    let headers = new HttpHeaders();
    const params = new HttpParams();
    if (IfModifiedSince !== undefined && IfModifiedSince !== null) {
      headers = headers.set('If-Modified-Since', IfModifiedSince + '');
    }
    if (IfNoneMatch !== undefined && IfNoneMatch !== null) {
      headers = headers.set('If-None-Match', IfNoneMatch + '');
    }
    return this.sendRequest<Comment[]>('get', uri, headers, params, null);
  }

  /**
  * Method create
  * @param IfMatch If-Match
  * @param IfUnmodifiedSince If-Unmodified-Since
  * @param data data
  * @return Full HTTP response as Observable
  */
  public create(data: Comment, IfMatch?: string, IfUnmodifiedSince?: string): Observable<HttpResponse<Comment>> {
    const uri = `/comments/`;
    let headers = new HttpHeaders();
    const params = new HttpParams();
    if (IfMatch !== undefined && IfMatch !== null) {
      headers = headers.set('If-Match', IfMatch + '');
    }
    if (IfUnmodifiedSince !== undefined && IfUnmodifiedSince !== null) {
      headers = headers.set('If-Unmodified-Since', IfUnmodifiedSince + '');
    }
    return this.sendRequest<Comment>('post', uri, headers, params, JSON.stringify(data));
  }

  /**
  * Method get
  * @param IfModifiedSince If-Modified-Since
  * @param IfNoneMatch If-None-Match
  * @param id id
  * @return Full HTTP response as Observable
  */
  public get(id: number, IfModifiedSince?: string, IfNoneMatch?: string): Observable<HttpResponse<Comment>> {
    const uri = `/comments/${id}`;
    let headers = new HttpHeaders();
    const params = new HttpParams();
    if (IfModifiedSince !== undefined && IfModifiedSince !== null) {
      headers = headers.set('If-Modified-Since', IfModifiedSince + '');
    }
    if (IfNoneMatch !== undefined && IfNoneMatch !== null) {
      headers = headers.set('If-None-Match', IfNoneMatch + '');
    }
    return this.sendRequest<Comment>('get', uri, headers, params, null);
  }

  /**
  * Method overwrite
  * @param IfMatch If-Match
  * @param IfUnmodifiedSince If-Unmodified-Since
  * @param data data
  * @param id id
  * @return Full HTTP response as Observable
  */
  public overwrite(data: Comment, id: number, IfMatch?: string, IfUnmodifiedSince?: string): Observable<HttpResponse<Comment>> {
    const uri = `/comments/${id}`;
    let headers = new HttpHeaders();
    const params = new HttpParams();
    if (IfMatch !== undefined && IfMatch !== null) {
      headers = headers.set('If-Match', IfMatch + '');
    }
    if (IfUnmodifiedSince !== undefined && IfUnmodifiedSince !== null) {
      headers = headers.set('If-Unmodified-Since', IfUnmodifiedSince + '');
    }
    return this.sendRequest<Comment>('put', uri, headers, params, JSON.stringify(data));
  }

  /**
  * Method delete
  * @param IfMatch If-Match
  * @param IfUnmodifiedSince If-Unmodified-Since
  * @param id id
  * @return Full HTTP response as Observable
  */
  public delete(id: number, IfMatch?: string, IfUnmodifiedSince?: string): Observable<HttpResponse<any>> {
    const uri = `/comments/${id}`;
    let headers = new HttpHeaders();
    const params = new HttpParams();
    if (IfMatch !== undefined && IfMatch !== null) {
      headers = headers.set('If-Match', IfMatch + '');
    }
    if (IfUnmodifiedSince !== undefined && IfUnmodifiedSince !== null) {
      headers = headers.set('If-Unmodified-Since', IfUnmodifiedSince + '');
    }
    return this.sendRequest<any>('delete', uri, headers, params, null);
  }

  /**
  * Method modify
  * @param IfMatch If-Match
  * @param IfUnmodifiedSince If-Unmodified-Since
  * @param id id
  * @param modifications modifications
  * @return Full HTTP response as Observable
  */
  public modify(id: number, modifications: FieldModification[], IfMatch?: string, IfUnmodifiedSince?: string): Observable<HttpResponse<Comment>> {
    const uri = `/comments/${id}`;
    let headers = new HttpHeaders();
    const params = new HttpParams();
    if (IfMatch !== undefined && IfMatch !== null) {
      headers = headers.set('If-Match', IfMatch + '');
    }
    if (IfUnmodifiedSince !== undefined && IfUnmodifiedSince !== null) {
      headers = headers.set('If-Unmodified-Since', IfUnmodifiedSince + '');
    }
    return this.sendRequest<Comment>('patch', uri, headers, params, JSON.stringify(modifications));
  }

  /**
  * Method getAllCustomers
  * @param IfModifiedSince If-Modified-Since
  * @param IfNoneMatch If-None-Match
  * @return Full HTTP response as Observable
  */
  public getAllCustomers(IfModifiedSince?: string, IfNoneMatch?: string): Observable<HttpResponse<Customer[]>> {
    const uri = `/common/customers/`;
    let headers = new HttpHeaders();
    const params = new HttpParams();
    if (IfModifiedSince !== undefined && IfModifiedSince !== null) {
      headers = headers.set('If-Modified-Since', IfModifiedSince + '');
    }
    if (IfNoneMatch !== undefined && IfNoneMatch !== null) {
      headers = headers.set('If-None-Match', IfNoneMatch + '');
    }
    return this.sendRequest<Customer[]>('get', uri, headers, params, null);
  }

  /**
  * Method createCustomer
  * @param IfMatch If-Match
  * @param IfUnmodifiedSince If-Unmodified-Since
  * @param data data
  * @return Full HTTP response as Observable
  */
  public createCustomer(data: Customer, IfMatch?: string, IfUnmodifiedSince?: string): Observable<HttpResponse<Customer>> {
    const uri = `/common/customers/`;
    let headers = new HttpHeaders();
    const params = new HttpParams();
    if (IfMatch !== undefined && IfMatch !== null) {
      headers = headers.set('If-Match', IfMatch + '');
    }
    if (IfUnmodifiedSince !== undefined && IfUnmodifiedSince !== null) {
      headers = headers.set('If-Unmodified-Since', IfUnmodifiedSince + '');
    }
    return this.sendRequest<Customer>('post', uri, headers, params, JSON.stringify(data));
  }

  /**
  * Method getCustomer
  * @param IfModifiedSince If-Modified-Since
  * @param IfNoneMatch If-None-Match
  * @param id id
  * @return Full HTTP response as Observable
  */
  public getCustomer(id: number, IfModifiedSince?: string, IfNoneMatch?: string): Observable<HttpResponse<Customer>> {
    const uri = `/common/customers/${id}`;
    let headers = new HttpHeaders();
    const params = new HttpParams();
    if (IfModifiedSince !== undefined && IfModifiedSince !== null) {
      headers = headers.set('If-Modified-Since', IfModifiedSince + '');
    }
    if (IfNoneMatch !== undefined && IfNoneMatch !== null) {
      headers = headers.set('If-None-Match', IfNoneMatch + '');
    }
    return this.sendRequest<Customer>('get', uri, headers, params, null);
  }

  /**
  * Method overwriteCustomer
  * @param IfMatch If-Match
  * @param IfUnmodifiedSince If-Unmodified-Since
  * @param data data
  * @param id id
  * @return Full HTTP response as Observable
  */
  public overwriteCustomer(data: Customer, id: number, IfMatch?: string, IfUnmodifiedSince?: string): Observable<HttpResponse<Customer>> {
    const uri = `/common/customers/${id}`;
    let headers = new HttpHeaders();
    const params = new HttpParams();
    if (IfMatch !== undefined && IfMatch !== null) {
      headers = headers.set('If-Match', IfMatch + '');
    }
    if (IfUnmodifiedSince !== undefined && IfUnmodifiedSince !== null) {
      headers = headers.set('If-Unmodified-Since', IfUnmodifiedSince + '');
    }
    return this.sendRequest<Customer>('put', uri, headers, params, JSON.stringify(data));
  }

  /**
  * Method deleteCustomer
  * @param IfMatch If-Match
  * @param IfUnmodifiedSince If-Unmodified-Since
  * @param id id
  * @return Full HTTP response as Observable
  */
  public deleteCustomer(id: number, IfMatch?: string, IfUnmodifiedSince?: string): Observable<HttpResponse<any>> {
    const uri = `/common/customers/${id}`;
    let headers = new HttpHeaders();
    const params = new HttpParams();
    if (IfMatch !== undefined && IfMatch !== null) {
      headers = headers.set('If-Match', IfMatch + '');
    }
    if (IfUnmodifiedSince !== undefined && IfUnmodifiedSince !== null) {
      headers = headers.set('If-Unmodified-Since', IfUnmodifiedSince + '');
    }
    return this.sendRequest<any>('delete', uri, headers, params, null);
  }

  /**
  * Method patchCustomer
  * @param IfMatch If-Match
  * @param IfUnmodifiedSince If-Unmodified-Since
  * @param id id
  * @param modifications modifications
  * @return Full HTTP response as Observable
  */
  public patchCustomer(id: number, modifications: FieldModification[], IfMatch?: string, IfUnmodifiedSince?: string): Observable<HttpResponse<Customer>> {
    const uri = `/common/customers/${id}`;
    let headers = new HttpHeaders();
    const params = new HttpParams();
    if (IfMatch !== undefined && IfMatch !== null) {
      headers = headers.set('If-Match', IfMatch + '');
    }
    if (IfUnmodifiedSince !== undefined && IfUnmodifiedSince !== null) {
      headers = headers.set('If-Unmodified-Since', IfUnmodifiedSince + '');
    }
    return this.sendRequest<Customer>('patch', uri, headers, params, JSON.stringify(modifications));
  }

  /**
  * Method getAllInvitations
  * @param IfModifiedSince If-Modified-Since
  * @param IfNoneMatch If-None-Match
  * @return Full HTTP response as Observable
  */
  public getAllInvitations(IfModifiedSince?: string, IfNoneMatch?: string): Observable<HttpResponse<Invitation[]>> {
    const uri = `/common/invitations/`;
    let headers = new HttpHeaders();
    const params = new HttpParams();
    if (IfModifiedSince !== undefined && IfModifiedSince !== null) {
      headers = headers.set('If-Modified-Since', IfModifiedSince + '');
    }
    if (IfNoneMatch !== undefined && IfNoneMatch !== null) {
      headers = headers.set('If-None-Match', IfNoneMatch + '');
    }
    return this.sendRequest<Invitation[]>('get', uri, headers, params, null);
  }

  /**
  * Method createInvitation
  * @param IfMatch If-Match
  * @param IfUnmodifiedSince If-Unmodified-Since
  * @param data data
  * @return Full HTTP response as Observable
  */
  public createInvitation(data: Invitation, IfMatch?: string, IfUnmodifiedSince?: string): Observable<HttpResponse<Invitation>> {
    const uri = `/common/invitations/`;
    let headers = new HttpHeaders();
    const params = new HttpParams();
    if (IfMatch !== undefined && IfMatch !== null) {
      headers = headers.set('If-Match', IfMatch + '');
    }
    if (IfUnmodifiedSince !== undefined && IfUnmodifiedSince !== null) {
      headers = headers.set('If-Unmodified-Since', IfUnmodifiedSince + '');
    }
    return this.sendRequest<Invitation>('post', uri, headers, params, JSON.stringify(data));
  }

  /**
  * Method activateInvitation
  * @param activation activation
  * @return Full HTTP response as Observable
  */
  public activateInvitation(activation: InvitationActivation): Observable<HttpResponse<any>> {
    const uri = `/common/invitations/actions/activate`;
    const headers = new HttpHeaders();
    const params = new HttpParams();
    return this.sendRequest<any>('post', uri, headers, params, JSON.stringify(activation));
  }

  /**
  * Method getInvitation
  * @param IfModifiedSince If-Modified-Since
  * @param IfNoneMatch If-None-Match
  * @param id id
  * @return Full HTTP response as Observable
  */
  public getInvitation(id: number, IfModifiedSince?: string, IfNoneMatch?: string): Observable<HttpResponse<Invitation>> {
    const uri = `/common/invitations/${id}`;
    let headers = new HttpHeaders();
    const params = new HttpParams();
    if (IfModifiedSince !== undefined && IfModifiedSince !== null) {
      headers = headers.set('If-Modified-Since', IfModifiedSince + '');
    }
    if (IfNoneMatch !== undefined && IfNoneMatch !== null) {
      headers = headers.set('If-None-Match', IfNoneMatch + '');
    }
    return this.sendRequest<Invitation>('get', uri, headers, params, null);
  }

  /**
  * Method deleteInvitation
  * @param IfMatch If-Match
  * @param IfUnmodifiedSince If-Unmodified-Since
  * @param id id
  * @return Full HTTP response as Observable
  */
  public deleteInvitation(id: number, IfMatch?: string, IfUnmodifiedSince?: string): Observable<HttpResponse<any>> {
    const uri = `/common/invitations/${id}`;
    let headers = new HttpHeaders();
    const params = new HttpParams();
    if (IfMatch !== undefined && IfMatch !== null) {
      headers = headers.set('If-Match', IfMatch + '');
    }
    if (IfUnmodifiedSince !== undefined && IfUnmodifiedSince !== null) {
      headers = headers.set('If-Unmodified-Since', IfUnmodifiedSince + '');
    }
    return this.sendRequest<any>('delete', uri, headers, params, null);
  }

  /**
  * Method patchInvitation
  * @param IfMatch If-Match
  * @param IfUnmodifiedSince If-Unmodified-Since
  * @param id id
  * @param modifications modifications
  * @return Full HTTP response as Observable
  */
  public patchInvitation(id: number, modifications: FieldModification[], IfMatch?: string, IfUnmodifiedSince?: string): Observable<HttpResponse<Invitation>> {
    const uri = `/common/invitations/${id}`;
    let headers = new HttpHeaders();
    const params = new HttpParams();
    if (IfMatch !== undefined && IfMatch !== null) {
      headers = headers.set('If-Match', IfMatch + '');
    }
    if (IfUnmodifiedSince !== undefined && IfUnmodifiedSince !== null) {
      headers = headers.set('If-Unmodified-Since', IfUnmodifiedSince + '');
    }
    return this.sendRequest<Invitation>('patch', uri, headers, params, JSON.stringify(modifications));
  }

  /**
  * Method getWithSecret
  * @param IfModifiedSince If-Modified-Since
  * @param IfNoneMatch If-None-Match
  * @param id id
  * @param secret secret
  * @return Full HTTP response as Observable
  */
  public getWithSecret(id: number, secret: string, IfModifiedSince?: string, IfNoneMatch?: string): Observable<HttpResponse<Invitation>> {
    const uri = `/common/invitations/${id}/${secret}`;
    let headers = new HttpHeaders();
    const params = new HttpParams();
    if (IfModifiedSince !== undefined && IfModifiedSince !== null) {
      headers = headers.set('If-Modified-Since', IfModifiedSince + '');
    }
    if (IfNoneMatch !== undefined && IfNoneMatch !== null) {
      headers = headers.set('If-None-Match', IfNoneMatch + '');
    }
    return this.sendRequest<Invitation>('get', uri, headers, params, null);
  }

  /**
  * Method getAllTeams
  * @param IfModifiedSince If-Modified-Since
  * @param IfNoneMatch If-None-Match
  * @return Full HTTP response as Observable
  */
  public getAllTeams(IfModifiedSince?: string, IfNoneMatch?: string): Observable<HttpResponse<Team[]>> {
    const uri = `/common/teams/`;
    let headers = new HttpHeaders();
    const params = new HttpParams();
    if (IfModifiedSince !== undefined && IfModifiedSince !== null) {
      headers = headers.set('If-Modified-Since', IfModifiedSince + '');
    }
    if (IfNoneMatch !== undefined && IfNoneMatch !== null) {
      headers = headers.set('If-None-Match', IfNoneMatch + '');
    }
    return this.sendRequest<Team[]>('get', uri, headers, params, null);
  }

  /**
  * Method createTeam
  * @param IfMatch If-Match
  * @param IfUnmodifiedSince If-Unmodified-Since
  * @param data data
  * @return Full HTTP response as Observable
  */
  public createTeam(data: Team, IfMatch?: string, IfUnmodifiedSince?: string): Observable<HttpResponse<Team>> {
    const uri = `/common/teams/`;
    let headers = new HttpHeaders();
    const params = new HttpParams();
    if (IfMatch !== undefined && IfMatch !== null) {
      headers = headers.set('If-Match', IfMatch + '');
    }
    if (IfUnmodifiedSince !== undefined && IfUnmodifiedSince !== null) {
      headers = headers.set('If-Unmodified-Since', IfUnmodifiedSince + '');
    }
    return this.sendRequest<Team>('post', uri, headers, params, JSON.stringify(data));
  }

  /**
  * Method getTeam
  * @param IfModifiedSince If-Modified-Since
  * @param IfNoneMatch If-None-Match
  * @param id id
  * @return Full HTTP response as Observable
  */
  public getTeam(id: number, IfModifiedSince?: string, IfNoneMatch?: string): Observable<HttpResponse<Team>> {
    const uri = `/common/teams/${id}`;
    let headers = new HttpHeaders();
    const params = new HttpParams();
    if (IfModifiedSince !== undefined && IfModifiedSince !== null) {
      headers = headers.set('If-Modified-Since', IfModifiedSince + '');
    }
    if (IfNoneMatch !== undefined && IfNoneMatch !== null) {
      headers = headers.set('If-None-Match', IfNoneMatch + '');
    }
    return this.sendRequest<Team>('get', uri, headers, params, null);
  }

  /**
  * Method overwriteTeam
  * @param IfMatch If-Match
  * @param IfUnmodifiedSince If-Unmodified-Since
  * @param data data
  * @param id id
  * @return Full HTTP response as Observable
  */
  public overwriteTeam(data: Team, id: number, IfMatch?: string, IfUnmodifiedSince?: string): Observable<HttpResponse<Team>> {
    const uri = `/common/teams/${id}`;
    let headers = new HttpHeaders();
    const params = new HttpParams();
    if (IfMatch !== undefined && IfMatch !== null) {
      headers = headers.set('If-Match', IfMatch + '');
    }
    if (IfUnmodifiedSince !== undefined && IfUnmodifiedSince !== null) {
      headers = headers.set('If-Unmodified-Since', IfUnmodifiedSince + '');
    }
    return this.sendRequest<Team>('put', uri, headers, params, JSON.stringify(data));
  }

  /**
  * Method deleteTeam
  * @param IfMatch If-Match
  * @param IfUnmodifiedSince If-Unmodified-Since
  * @param id id
  * @return Full HTTP response as Observable
  */
  public deleteTeam(id: number, IfMatch?: string, IfUnmodifiedSince?: string): Observable<HttpResponse<any>> {
    const uri = `/common/teams/${id}`;
    let headers = new HttpHeaders();
    const params = new HttpParams();
    if (IfMatch !== undefined && IfMatch !== null) {
      headers = headers.set('If-Match', IfMatch + '');
    }
    if (IfUnmodifiedSince !== undefined && IfUnmodifiedSince !== null) {
      headers = headers.set('If-Unmodified-Since', IfUnmodifiedSince + '');
    }
    return this.sendRequest<any>('delete', uri, headers, params, null);
  }

  /**
  * Method patchTeam
  * @param IfMatch If-Match
  * @param IfUnmodifiedSince If-Unmodified-Since
  * @param id id
  * @param modifications modifications
  * @return Full HTTP response as Observable
  */
  public patchTeam(id: number, modifications: FieldModification[], IfMatch?: string, IfUnmodifiedSince?: string): Observable<HttpResponse<Team>> {
    const uri = `/common/teams/${id}`;
    let headers = new HttpHeaders();
    const params = new HttpParams();
    if (IfMatch !== undefined && IfMatch !== null) {
      headers = headers.set('If-Match', IfMatch + '');
    }
    if (IfUnmodifiedSince !== undefined && IfUnmodifiedSince !== null) {
      headers = headers.set('If-Unmodified-Since', IfUnmodifiedSince + '');
    }
    return this.sendRequest<Team>('patch', uri, headers, params, JSON.stringify(modifications));
  }

  /**
  * Method getAllUsers
  * @param IfModifiedSince If-Modified-Since
  * @param IfNoneMatch If-None-Match
  * @return Full HTTP response as Observable
  */
  public getAllUsers(IfModifiedSince?: string, IfNoneMatch?: string): Observable<HttpResponse<User[]>> {
    const uri = `/common/users/`;
    let headers = new HttpHeaders();
    const params = new HttpParams();
    if (IfModifiedSince !== undefined && IfModifiedSince !== null) {
      headers = headers.set('If-Modified-Since', IfModifiedSince + '');
    }
    if (IfNoneMatch !== undefined && IfNoneMatch !== null) {
      headers = headers.set('If-None-Match', IfNoneMatch + '');
    }
    return this.sendRequest<User[]>('get', uri, headers, params, null);
  }

  /**
  * Method createUser
  * @param IfMatch If-Match
  * @param IfUnmodifiedSince If-Unmodified-Since
  * @param data data
  * @return Full HTTP response as Observable
  */
  public createUser(data: User, IfMatch?: string, IfUnmodifiedSince?: string): Observable<HttpResponse<User>> {
    const uri = `/common/users/`;
    let headers = new HttpHeaders();
    const params = new HttpParams();
    if (IfMatch !== undefined && IfMatch !== null) {
      headers = headers.set('If-Match', IfMatch + '');
    }
    if (IfUnmodifiedSince !== undefined && IfUnmodifiedSince !== null) {
      headers = headers.set('If-Unmodified-Since', IfUnmodifiedSince + '');
    }
    return this.sendRequest<User>('post', uri, headers, params, JSON.stringify(data));
  }

  /**
  * Method updatePassword
  * @param changeRequest changeRequest
  * @return Full HTTP response as Observable
  */
  public updatePassword(changeRequest: PasswordChangeRequest): Observable<HttpResponse<any>> {
    const uri = `/common/users/actions/setPassword`;
    const headers = new HttpHeaders();
    const params = new HttpParams();
    return this.sendRequest<any>('post', uri, headers, params, JSON.stringify(changeRequest));
  }

  /**
  * Method getUser
  * @param IfModifiedSince If-Modified-Since
  * @param IfNoneMatch If-None-Match
  * @param id id
  * @return Full HTTP response as Observable
  */
  public getUser(id: number, IfModifiedSince?: string, IfNoneMatch?: string): Observable<HttpResponse<User>> {
    const uri = `/common/users/${id}`;
    let headers = new HttpHeaders();
    const params = new HttpParams();
    if (IfModifiedSince !== undefined && IfModifiedSince !== null) {
      headers = headers.set('If-Modified-Since', IfModifiedSince + '');
    }
    if (IfNoneMatch !== undefined && IfNoneMatch !== null) {
      headers = headers.set('If-None-Match', IfNoneMatch + '');
    }
    return this.sendRequest<User>('get', uri, headers, params, null);
  }

  /**
  * Method overwriteUser
  * @param IfMatch If-Match
  * @param IfUnmodifiedSince If-Unmodified-Since
  * @param data data
  * @param id id
  * @return Full HTTP response as Observable
  */
  public overwriteUser(id: number, data: User, IfMatch?: string, IfUnmodifiedSince?: string): Observable<HttpResponse<User>> {
    const uri = `/common/users/${id}`;
    let headers = new HttpHeaders();
    const params = new HttpParams();
    if (IfMatch !== undefined && IfMatch !== null) {
      headers = headers.set('If-Match', IfMatch + '');
    }
    if (IfUnmodifiedSince !== undefined && IfUnmodifiedSince !== null) {
      headers = headers.set('If-Unmodified-Since', IfUnmodifiedSince + '');
    }
    return this.sendRequest<User>('put', uri, headers, params, JSON.stringify(data));
  }

  /**
  * Method deleteUser
  * @param IfMatch If-Match
  * @param IfUnmodifiedSince If-Unmodified-Since
  * @param id id
  * @return Full HTTP response as Observable
  */
  public deleteUser(id: number, IfMatch?: string, IfUnmodifiedSince?: string): Observable<HttpResponse<any>> {
    const uri = `/common/users/${id}`;
    let headers = new HttpHeaders();
    const params = new HttpParams();
    if (IfMatch !== undefined && IfMatch !== null) {
      headers = headers.set('If-Match', IfMatch + '');
    }
    if (IfUnmodifiedSince !== undefined && IfUnmodifiedSince !== null) {
      headers = headers.set('If-Unmodified-Since', IfUnmodifiedSince + '');
    }
    return this.sendRequest<any>('delete', uri, headers, params, null);
  }

  /**
  * Method patchUser
  * @param IfMatch If-Match
  * @param IfUnmodifiedSince If-Unmodified-Since
  * @param id id
  * @param modifications modifications
  * @return Full HTTP response as Observable
  */
  public patchUser(id: number, modifications: FieldModification[], IfMatch?: string, IfUnmodifiedSince?: string): Observable<HttpResponse<User>> {
    const uri = `/common/users/${id}`;
    let headers = new HttpHeaders();
    const params = new HttpParams();
    if (IfMatch !== undefined && IfMatch !== null) {
      headers = headers.set('If-Match', IfMatch + '');
    }
    if (IfUnmodifiedSince !== undefined && IfUnmodifiedSince !== null) {
      headers = headers.set('If-Unmodified-Since', IfUnmodifiedSince + '');
    }
    return this.sendRequest<User>('patch', uri, headers, params, JSON.stringify(modifications));
  }

  /**
  * Method getSession
  * @return Full HTTP response as Observable
  */
  public getSession(): Observable<HttpResponse<SessionInformation>> {
    const uri = `/session`;
    const headers = new HttpHeaders();
    const params = new HttpParams();
    return this.sendRequest<SessionInformation>('get', uri, headers, params, null);
  }

  /**
  * Method openSession
  * @param credentials credentials
  * @return Full HTTP response as Observable
  */
  public openSession(credentials: LoginAndPassword): Observable<HttpResponse<SessionInformation>> {
    const uri = `/session`;
    const headers = new HttpHeaders();
    const params = new HttpParams();
    return this.sendRequest<SessionInformation>('post', uri, headers, params, JSON.stringify(credentials));
  }

  /**
  * Method closeSession
  * @return Full HTTP response as Observable
  */
  public closeSession(): Observable<HttpResponse<any>> {
    const uri = `/session`;
    const headers = new HttpHeaders();
    const params = new HttpParams();
    return this.sendRequest<any>('delete', uri, headers, params, null);
  }

  /**
  * Method getAllTickets
  * @param IfModifiedSince If-Modified-Since
  * @param IfNoneMatch If-None-Match
  * @return Full HTTP response as Observable
  */
  public getAllTickets(IfModifiedSince?: string, IfNoneMatch?: string): Observable<HttpResponse<Ticket[]>> {
    const uri = `/tickets/`;
    let headers = new HttpHeaders();
    const params = new HttpParams();
    if (IfModifiedSince !== undefined && IfModifiedSince !== null) {
      headers = headers.set('If-Modified-Since', IfModifiedSince + '');
    }
    if (IfNoneMatch !== undefined && IfNoneMatch !== null) {
      headers = headers.set('If-None-Match', IfNoneMatch + '');
    }
    return this.sendRequest<Ticket[]>('get', uri, headers, params, null);
  }

  /**
  * Method createTicket
  * @param IfMatch If-Match
  * @param IfUnmodifiedSince If-Unmodified-Since
  * @param data data
  * @return Full HTTP response as Observable
  */
  public createTicket(data: Ticket, IfMatch?: string, IfUnmodifiedSince?: string): Observable<HttpResponse<Ticket>> {
    const uri = `/tickets/`;
    let headers = new HttpHeaders();
    const params = new HttpParams();
    if (IfMatch !== undefined && IfMatch !== null) {
      headers = headers.set('If-Match', IfMatch + '');
    }
    if (IfUnmodifiedSince !== undefined && IfUnmodifiedSince !== null) {
      headers = headers.set('If-Unmodified-Since', IfUnmodifiedSince + '');
    }
    return this.sendRequest<Ticket>('post', uri, headers, params, JSON.stringify(data));
  }

  /**
  * Method addAttachment
  * @param file file
  * @param ticketId ticketId
  * @return Full HTTP response as Observable
  */
  public addAttachment(file: Part, ticketId: number): Observable<HttpResponse<any>> {
    const uri = `/tickets/actions/addAttachment`;
    const headers = new HttpHeaders();
    const params = new HttpParams();
    return this.sendRequest<any>('post', uri, headers, params, null);
  }

  /**
  * Method filterTickets
  * @param IfModifiedSince If-Modified-Since
  * @param IfNoneMatch If-None-Match
  * @param assigneeId assigneeId
  * @param authorId authorId
  * @param bodyText bodyText
  * @param categoryId categoryId
  * @param customerId customerId
  * @param limit limit
  * @param maxAlarm maxAlarm
  * @param maxCreation maxCreation
  * @param maxDeadline maxDeadline
  * @param maxPriority maxPriority
  * @param minAlarm minAlarm
  * @param minCreation minCreation
  * @param minDeadline minDeadline
  * @param minPriority minPriority
  * @param offset offset
  * @param orderBy orderBy
  * @param orderDescending orderDescending
  * @param resolved resolved
  * @param statusId statusId
  * @param subjectText subjectText
  * @param teamId teamId
  * @param waiting waiting
  * @param watcherId watcherId
  * @return Full HTTP response as Observable
  */
  public filterTickets(teamId?: number, IfModifiedSince?: string, IfNoneMatch?: string, assigneeId?: number, authorId?: number, bodyText?: string, categoryId?: number, customerId?: number, limit?: number, maxAlarm?: number, maxCreation?: number, maxDeadline?: number, maxPriority?: number, minAlarm?: number, minCreation?: number, minDeadline?: number, minPriority?: number, offset?: number, orderBy?: string, orderDescending?: boolean, resolved?: boolean, statusId?: number, subjectText?: string, waiting?: boolean, watcherId?: number): Observable<HttpResponse<Ticket[]>> {
    const uri = `/tickets/filtered`;
    let headers = new HttpHeaders();
    let params = new HttpParams();
    if (IfModifiedSince !== undefined && IfModifiedSince !== null) {
      headers = headers.set('If-Modified-Since', IfModifiedSince + '');
    }
    if (IfNoneMatch !== undefined && IfNoneMatch !== null) {
      headers = headers.set('If-None-Match', IfNoneMatch + '');
    }
    if (assigneeId !== undefined && assigneeId !== null) {
      params = params.set('assigneeId', assigneeId + '');
    }
    if (authorId !== undefined && authorId !== null) {
      params = params.set('authorId', authorId + '');
    }
    if (bodyText !== undefined && bodyText !== null) {
      params = params.set('bodyText', bodyText + '');
    }
    if (categoryId !== undefined && categoryId !== null) {
      params = params.set('categoryId', categoryId + '');
    }
    if (customerId !== undefined && customerId !== null) {
      params = params.set('customerId', customerId + '');
    }
    if (limit !== undefined && limit !== null) {
      params = params.set('limit', limit + '');
    }
    if (maxAlarm !== undefined && maxAlarm !== null) {
      params = params.set('maxAlarm', maxAlarm + '');
    }
    if (maxCreation !== undefined && maxCreation !== null) {
      params = params.set('maxCreation', maxCreation + '');
    }
    if (maxDeadline !== undefined && maxDeadline !== null) {
      params = params.set('maxDeadline', maxDeadline + '');
    }
    if (maxPriority !== undefined && maxPriority !== null) {
      params = params.set('maxPriority', maxPriority + '');
    }
    if (minAlarm !== undefined && minAlarm !== null) {
      params = params.set('minAlarm', minAlarm + '');
    }
    if (minCreation !== undefined && minCreation !== null) {
      params = params.set('minCreation', minCreation + '');
    }
    if (minDeadline !== undefined && minDeadline !== null) {
      params = params.set('minDeadline', minDeadline + '');
    }
    if (minPriority !== undefined && minPriority !== null) {
      params = params.set('minPriority', minPriority + '');
    }
    if (offset !== undefined && offset !== null) {
      params = params.set('offset', offset + '');
    }
    if (orderBy !== undefined && orderBy !== null) {
      params = params.set('orderBy', orderBy + '');
    }
    if (orderDescending !== undefined && orderDescending !== null) {
      params = params.set('orderDescending', orderDescending + '');
    }
    if (resolved !== undefined && resolved !== null) {
      params = params.set('resolved', resolved + '');
    }
    if (statusId !== undefined && statusId !== null) {
      params = params.set('statusId', statusId + '');
    }
    if (subjectText !== undefined && subjectText !== null) {
      params = params.set('subjectText', subjectText + '');
    }
    if (teamId !== undefined && teamId !== null) {
      params = params.set('teamId', teamId + '');
    }
    if (waiting !== undefined && waiting !== null) {
      params = params.set('waiting', waiting + '');
    }
    if (watcherId !== undefined && watcherId !== null) {
      params = params.set('watcherId', watcherId + '');
    }
    return this.sendRequest<Ticket[]>('get', uri, headers, params, null);
  }

  /**
  * Method getTicket
  * @param IfModifiedSince If-Modified-Since
  * @param IfNoneMatch If-None-Match
  * @param id id
  * @return Full HTTP response as Observable
  */
  public getTicket(id: number, IfModifiedSince?: string, IfNoneMatch?: string): Observable<HttpResponse<Ticket>> {
    const uri = `/tickets/${id}`;
    let headers = new HttpHeaders();
    const params = new HttpParams();
    if (IfModifiedSince !== undefined && IfModifiedSince !== null) {
      headers = headers.set('If-Modified-Since', IfModifiedSince + '');
    }
    if (IfNoneMatch !== undefined && IfNoneMatch !== null) {
      headers = headers.set('If-None-Match', IfNoneMatch + '');
    }
    return this.sendRequest<Ticket>('get', uri, headers, params, null);
  }

  /**
  * Method overwriteTicket
  * @param IfMatch If-Match
  * @param IfUnmodifiedSince If-Unmodified-Since
  * @param data data
  * @param id id
  * @return Full HTTP response as Observable
  */
  public overwriteTicket(data: Ticket, id: number, IfMatch?: string, IfUnmodifiedSince?: string): Observable<HttpResponse<Ticket>> {
    const uri = `/tickets/${id}`;
    let headers = new HttpHeaders();
    const params = new HttpParams();
    if (IfMatch !== undefined && IfMatch !== null) {
      headers = headers.set('If-Match', IfMatch + '');
    }
    if (IfUnmodifiedSince !== undefined && IfUnmodifiedSince !== null) {
      headers = headers.set('If-Unmodified-Since', IfUnmodifiedSince + '');
    }
    return this.sendRequest<Ticket>('put', uri, headers, params, JSON.stringify(data));
  }

  /**
  * Method deleteTicket
  * @param IfMatch If-Match
  * @param IfUnmodifiedSince If-Unmodified-Since
  * @param id id
  * @return Full HTTP response as Observable
  */
  public deleteTicket(id: number, IfMatch?: string, IfUnmodifiedSince?: string): Observable<HttpResponse<any>> {
    const uri = `/tickets/${id}`;
    let headers = new HttpHeaders();
    const params = new HttpParams();
    if (IfMatch !== undefined && IfMatch !== null) {
      headers = headers.set('If-Match', IfMatch + '');
    }
    if (IfUnmodifiedSince !== undefined && IfUnmodifiedSince !== null) {
      headers = headers.set('If-Unmodified-Since', IfUnmodifiedSince + '');
    }
    return this.sendRequest<any>('delete', uri, headers, params, null);
  }

  /**
  * Method patchTicket
  * @param IfMatch If-Match
  * @param IfUnmodifiedSince If-Unmodified-Since
  * @param id id
  * @param modifications modifications
  * @return Full HTTP response as Observable
  */
  public patchTicket(id: number, modifications: FieldModification[], IfMatch?: string, IfUnmodifiedSince?: string): Observable<HttpResponse<Ticket>> {
    const uri = `/tickets/${id}`;
    let headers = new HttpHeaders();
    const params = new HttpParams();
    if (IfMatch !== undefined && IfMatch !== null) {
      headers = headers.set('If-Match', IfMatch + '');
    }
    if (IfUnmodifiedSince !== undefined && IfUnmodifiedSince !== null) {
      headers = headers.set('If-Unmodified-Since', IfUnmodifiedSince + '');
    }
    return this.sendRequest<Ticket>('patch', uri, headers, params, JSON.stringify(modifications));
  }

  /**
  * Method getAllUploadTemplates
  * @param IfModifiedSince If-Modified-Since
  * @param IfNoneMatch If-None-Match
  * @return Full HTTP response as Observable
  */
  public getAllUploadTemplates(IfModifiedSince?: string, IfNoneMatch?: string): Observable<HttpResponse<Template[]>> {
    const uri = `/upload/templates/`;
    let headers = new HttpHeaders();
    const params = new HttpParams();
    if (IfModifiedSince !== undefined && IfModifiedSince !== null) {
      headers = headers.set('If-Modified-Since', IfModifiedSince + '');
    }
    if (IfNoneMatch !== undefined && IfNoneMatch !== null) {
      headers = headers.set('If-None-Match', IfNoneMatch + '');
    }
    return this.sendRequest<Template[]>('get', uri, headers, params, null);
  }

  /**
  * Method createUploadTemplate
  * @param IfMatch If-Match
  * @param IfUnmodifiedSince If-Unmodified-Since
  * @param data data
  * @return Full HTTP response as Observable
  */
  public createUploadTemplate(data: Template, IfMatch?: string, IfUnmodifiedSince?: string): Observable<HttpResponse<Template>> {
    const uri = `/upload/templates/`;
    let headers = new HttpHeaders();
    const params = new HttpParams();
    if (IfMatch !== undefined && IfMatch !== null) {
      headers = headers.set('If-Match', IfMatch + '');
    }
    if (IfUnmodifiedSince !== undefined && IfUnmodifiedSince !== null) {
      headers = headers.set('If-Unmodified-Since', IfUnmodifiedSince + '');
    }
    return this.sendRequest<Template>('post', uri, headers, params, JSON.stringify(data));
  }

  /**
  * Method getUploadTemplate
  * @param IfModifiedSince If-Modified-Since
  * @param IfNoneMatch If-None-Match
  * @param id id
  * @return Full HTTP response as Observable
  */
  public getUploadTemplate(id: number, IfModifiedSince?: string, IfNoneMatch?: string): Observable<HttpResponse<Template>> {
    const uri = `/upload/templates/${id}`;
    let headers = new HttpHeaders();
    const params = new HttpParams();
    if (IfModifiedSince !== undefined && IfModifiedSince !== null) {
      headers = headers.set('If-Modified-Since', IfModifiedSince + '');
    }
    if (IfNoneMatch !== undefined && IfNoneMatch !== null) {
      headers = headers.set('If-None-Match', IfNoneMatch + '');
    }
    return this.sendRequest<Template>('get', uri, headers, params, null);
  }

  /**
  * Method overwriteUploadTemplate
  * @param IfMatch If-Match
  * @param IfUnmodifiedSince If-Unmodified-Since
  * @param data data
  * @param id id
  * @return Full HTTP response as Observable
  */
  public overwriteUploadTemplate(data: Template, id: number, IfMatch?: string, IfUnmodifiedSince?: string): Observable<HttpResponse<Template>> {
    const uri = `/upload/templates/${id}`;
    let headers = new HttpHeaders();
    const params = new HttpParams();
    if (IfMatch !== undefined && IfMatch !== null) {
      headers = headers.set('If-Match', IfMatch + '');
    }
    if (IfUnmodifiedSince !== undefined && IfUnmodifiedSince !== null) {
      headers = headers.set('If-Unmodified-Since', IfUnmodifiedSince + '');
    }
    return this.sendRequest<Template>('put', uri, headers, params, JSON.stringify(data));
  }

  /**
  * Method deleteUploadTemplate
  * @param IfMatch If-Match
  * @param IfUnmodifiedSince If-Unmodified-Since
  * @param id id
  * @return Full HTTP response as Observable
  */
  public deleteUploadTemplate(id: number, IfMatch?: string, IfUnmodifiedSince?: string): Observable<HttpResponse<any>> {
    const uri = `/upload/templates/${id}`;
    let headers = new HttpHeaders();
    const params = new HttpParams();
    if (IfMatch !== undefined && IfMatch !== null) {
      headers = headers.set('If-Match', IfMatch + '');
    }
    if (IfUnmodifiedSince !== undefined && IfUnmodifiedSince !== null) {
      headers = headers.set('If-Unmodified-Since', IfUnmodifiedSince + '');
    }
    return this.sendRequest<any>('delete', uri, headers, params, null);
  }

  /**
  * Method patchUploadTemplate
  * @param IfMatch If-Match
  * @param IfUnmodifiedSince If-Unmodified-Since
  * @param id id
  * @param modifications modifications
  * @return Full HTTP response as Observable
  */
  public patchUploadTemplate(id: number, modifications: FieldModification[], IfMatch?: string, IfUnmodifiedSince?: string): Observable<HttpResponse<Template>> {
    const uri = `/upload/templates/${id}`;
    let headers = new HttpHeaders();
    const params = new HttpParams();
    if (IfMatch !== undefined && IfMatch !== null) {
      headers = headers.set('If-Match', IfMatch + '');
    }
    if (IfUnmodifiedSince !== undefined && IfUnmodifiedSince !== null) {
      headers = headers.set('If-Unmodified-Since', IfUnmodifiedSince + '');
    }
    return this.sendRequest<Template>('patch', uri, headers, params, JSON.stringify(modifications));
  }

  private sendRequest<T>(method: string, uri: string, headers: HttpHeaders, params: HttpParams, body: any): Observable<HttpResponse<T>> {
    if (method === 'get') {
      return this.http.get<T>(this.domain + uri, { headers: headers.set('Accept', 'application/json'), params: params, observe: 'response' });
    } else if (method === 'options') {
      return this.http.options<T>(this.domain + uri, { headers: headers.set('Accept', 'application/json'), params: params, observe: 'response' });
    } else if (method === 'put') {
      return this.http.put<T>(this.domain + uri, body, { headers: headers.set('Content-Type', 'application/json'), params: params, observe: 'response' });
    } else if (method === 'post') {
      return this.http.post<T>(this.domain + uri, body, { headers: headers.set('Content-Type', 'application/json'), params: params, observe: 'response' });
    } else if (method === 'patch') {
      return this.http.patch<T>(this.domain + uri, body, { headers: headers.set('Content-Type', 'application/json'), params: params, observe: 'response' });
    } else if (method === 'delete') {
      return this.http.delete<T>(this.domain + uri, { headers: headers, params: params, observe: 'response' });
    } else {
      console.error('Unsupported request: ' + method);
      return Observable.throw('Unsupported request: ' + method);
    }
  }
}
