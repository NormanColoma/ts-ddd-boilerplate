
import GetPlaylists from './application/get_playlists/get-playlists';
import MongoPlaylistRepository from './infrastructure/persistence/mongo/mongo-playlist-repository';
import { MongoPlaylistParser } from './infrastructure/persistence/mongo/mongo-parser';
import PlaylistController from './infrastructure/rest/http/playlist.controller';
import express from 'express';
import { asClass, asFunction, createContainer, InjectionMode } from 'awilix';
import CreatePlaylist from './application/create_playlist/create-playlist';
import WinstonLogger from './shared/infrastructure/logging/winston-logger';
import errorHandler from './shared/infrastructure/rest/http/middlewares/error-handler';
import FakeEventBus from './shared/infrastructure/bus/event/fake-event-bus';

const container = createContainer({
  injectionMode: InjectionMode.PROXY,
});

container.register({
  getPlaylists: asClass(GetPlaylists).singleton(),
  createPlaylist: asClass(CreatePlaylist).singleton(),
  playlistRepository: asClass(MongoPlaylistRepository).singleton(),
  playlistParser: asClass(MongoPlaylistParser).singleton(),
  playlistController: asClass(PlaylistController).singleton(),
  router: asFunction(() => express.Router()).singleton(),
  logger: asClass(WinstonLogger).singleton(),
  errorHandler: asFunction(errorHandler).singleton(),
  eventBus: asClass(FakeEventBus).singleton(),
});

export default container;
