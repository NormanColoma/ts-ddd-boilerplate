
import GetPlaylists from './application/get_playlists/get-playlists';
import MongoPlaylistRepository from './infrastructure/persistence/mongo/mongo-playlist-repository';
import { MongoPlaylistParser } from './infrastructure/persistence/mongo/mongo-parser';
import PlaylistController from './infrastructure/rest/http/playlist.controller';
import express from 'express';
import { asClass, asFunction, createContainer, InjectionMode } from 'awilix';

const container = createContainer({
  injectionMode: InjectionMode.PROXY,
});

container.register({
  getPlaylists: asClass(GetPlaylists).singleton(),
  playlistRepository: asClass(MongoPlaylistRepository).singleton(),
  playlistParser: asClass(MongoPlaylistParser).singleton(),
  playlistController: asClass(PlaylistController).singleton(),
  router: asFunction(() => express.Router()).singleton(),
});

export default container;
