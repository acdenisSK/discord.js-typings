// Type definitions for discord.js 11.0.0
// Project: https://github.com/hydrabolt/discord.js
// Definitions by:
//   acdenisSK <acdenissk69@gmail.com> (https://github.com/acdenisSK)
//   Zack Campbell <zajrik@gmail.com> (https://github.com/zajrik)
// License: MIT

declare module 'discord.js' {
	import { EventEmitter } from 'events';
	import { Readable as ReadableStream } from 'stream';
	import { ChildProcess } from 'child_process';

	export const version: string;

	//#region Classes

	class AudioPlayer extends EventEmitter {
		constructor(voiceConnection: VoiceConnection);
		currentDispatcher: StreamDispatcher;
		opusEncoder: object;
		prism: object;
		voiceConnection: VoiceConnection;
	}

	export class Channel {
		constructor(client: Client, data: object);
		client: Client;
		createdAt: Date;
		createdTimestamp: number;
		id: string;
		type: 'dm' | 'group' | 'text' | 'voice';
		delete(): Promise<Channel>;
	}

	export class Client extends EventEmitter {
		constructor(options?: ClientOptions);
		broadcasts: VoiceBroadcast[];
		browser: boolean;
		channels: Collection<string, Channel>;
		emojis: Collection<string, Emoji>;
		guilds: Collection<string, Guild>;
		options: ClientOptions;
		ping: number;
		pings: number[];
		presences: Collection<string, Presence>;
		readyAt: Date;
		readyTimestamp: number;
		shard?: ShardClientUtil;
		status: number;
		token: string;
		uptime: number;
		user: ClientUser;
		users: Collection<string, User>;
		voiceConnections: Collection<string, VoiceConnection>;
		clearInterval(interval: NodeJS.Timer): void;
		clearTimeout(timeout: NodeJS.Timer): void;
		createVoiceBroadcast(): VoiceBroadcast;
		destroy(): Promise<void>;
		fetchApplication(id?: string): Promise<ClientOAuth2Application>;
		fetchInvite(invite: string): Promise<Invite>;
		fetchUser(id: string, cache?: boolean): Promise<User>;
		fetchVoiceRegions(): Promise<Collection<string, VoiceRegion>>;
		fetchWebhook(id: string, token?: string): Promise<Webhook>;
		generateInvite(permissions?: PermissionResolvable[] | number): Promise<string>;
		login(token: string): Promise<string>;
		setInterval(fn: Function, delay: number, ...args: any[]): NodeJS.Timer;
		setTimeout(fn: Function, delay: number, ...args: any[]): NodeJS.Timer;
		sweepMessages(lifetime?: number): number;
		syncGuilds(guilds?: Guild[] | Collection<string, Guild>): void;
		on(event: string, listener: Function): this;
		on(event: 'channelCreate', listener: (channel: Channel) => void): this;
		on(event: 'channelDelete', listener: (channel: Channel) => void): this;
		on(event: 'channelPinsUpdate', listener: (channel: Channel, time: Date) => void): this;
		on(event: 'channelUpdate', listener: (oldChannel: Channel, newChannel: Channel) => void): this;
		on(event: 'debug', listener: (info: string) => void): this;
		on(event: 'disconnect', listener: (event: any) => void): this;
		on(event: 'emojiCreate', listener: (emoji: Emoji) => void): this;
		on(event: 'emojiCreate', listener: (emoji: Emoji) => void): this;
		on(event: 'emojiUpdate', listener: (oldEmoji: Emoji, newEmoji: Emoji) => void): this;
		on(event: 'error', listener: (error: Error) => void): this;
		on(event: 'guildBanAdd', listener: (guild: Guild, user: User) => void): this;
		on(event: 'guildBanRemove', listener: (guild: Guild, user: User) => void): this;
		on(event: 'guildCreate', listener: (guild: Guild) => void): this;
		on(event: 'guildDelete', listener: (guild: Guild) => void): this;
		on(event: 'guildMemberAdd', listener: (member: GuildMember) => void): this;
		on(event: 'guildMemberAvailable', listener: (member: GuildMember) => void): this;
		on(event: 'guildMemberRemove', listener: (member: GuildMember) => void): this;
		on(event: 'guildMembersChunk', listener: (members: Collection<string, GuildMember>, guild: Guild) => void): this;
		on(event: 'guildMemberSpeaking', listener: (member: GuildMember, speaking: boolean) => void): this;
		on(event: 'guildMemberUpdate', listener: (oldMember: GuildMember, newMember: GuildMember) => void): this;
		on(event: 'guildUnavailable', listener: (guild: Guild) => void): this;
		on(event: 'guildUpdate', listener: (oldGuild: Guild, newGuild: Guild) => void): this;
		on(event: 'message', listener: (message: Message) => void): this;
		on(event: 'messageDelete', listener: (message: Message) => void): this;
		on(event: 'messageDeleteBulk', listener: (messages: Collection<string, Message>) => void): this;
		on(event: 'messageReactionAdd', listener: (messageReaction: MessageReaction, user: User) => void): this;
		on(event: 'messageReactionRemove', listener: (messageReaction: MessageReaction, user: User) => void): this;
		on(event: 'messageReactionRemoveAll', listener: (message: Message) => void): this;
		on(event: 'messageUpdate', listener: (oldMessage: Message, newMessage: Message) => void): this;
		on(event: 'presenceUpdate', listener: (oldMember: GuildMember, newMember: GuildMember) => void): this;
		on(event: 'ready', listener: () => void): this;
		on(event: 'reconnecting', listener: () => void): this;
		on(event: 'roleCreate', listener: (role: Role) => void): this;
		on(event: 'roleDelete', listener: (role: Role) => void): this;
		on(event: 'roleUpdate', listener: (oldRole: Role, newRole: Role) => void): this;
		on(event: 'typingStart', listener: (channel: Channel, user: User) => void): this;
		on(event: 'typingStop', listener: (channel: Channel, user: User) => void): this;
		on(event: 'userNoteUpdate', listener: (user: UserResolvable, oldNote: string, newNote: string) => void): this;
		on(event: 'userUpdate', listener: (oldUser: User, newUser: User) => void): this;
		on(event: 'voiceStateUpdate', listener: (oldMember: GuildMember, newMember: GuildMember) => void): this;
		on(event: 'warn', listener: (info: string) => void): this;
	}

	export class ClientOAuth2Application extends OAuth2Application {
		flags: number;
		owner: User;
	}

	export class ClientUser extends User {
		blocked: Collection<string, User>;
		email: string;
		friends: Collection<string, User>;
		mfaEnabled?: boolean;
		mobile?: boolean;
		notes?: Collection<string, string>;
		premium?: boolean;
		settings?: object;
		verified: boolean;
		acceptInvite(invite: Invite | string): Promise<Guild>
		addFriend(user?: UserResolvable): Promise<User>;
		createGroupDM(recipients: GroupDMRecipientOptions[]): Promise<GroupDMChannel>;
		createGuild(name: string, region: string, icon?: BufferResolvable | Base64Resolvable): Promise<Guild>;
		fetchMentions(options?: { limit?: number; roles?: boolean, everyone?: boolean; guild?: Guild | string }): Promise<Message[]>;
		removeFriend(user?: UserResolvable): Promise<User>;
		setAFK(afk: boolean): Promise<ClientUser>;
		setAvatar(avatar: BufferResolvable | Base64Resolvable): Promise<ClientUser>;
		setEmail(email: string, password: string): Promise<ClientUser>;
		setGame(game: string, streamingURL?: string): Promise<ClientUser>;
		setNote(note: string): Promise<User>;
		setPassword(newPassword: string, oldPassword: string): Promise<ClientUser>;
		setPresence(data: PresenceData): Promise<ClientUser>;
		setStatus(status: PresenceStatus): Promise<ClientUser>;
		setUsername(username: string, password?: string): Promise<ClientUser>;
	}

	class ClientVoiceManager {
		constructor(client: Client);
		client: Client;
		connections: Collection<string, VoiceConnection>;
		pending: Collection<string, VoiceConnection>;
		joinChannel(channel: VoiceChannel): Promise<VoiceConnection>;
		sendVoiceStateUpdate(channel: VoiceChannel, options?: object): void;
	}

	export class Collection<K, V> extends Map<K, V> {
		array(): V[];
		clone(): Collection<K, V>;
		concat(...collections: Collection<K, V>[]): Collection<K, V>;
		deleteAll(): Promise<V>[];
		equals(collection: Collection<any, any>): boolean;
		every(fn: (value: V, key: K, collection: Collection<K, V>) => boolean, thisArg?: any): boolean;
		exists(prop: keyof V, value: any): boolean;
		filter(fn: (value: V, key: K, collection: Collection<K, V>) => boolean, thisArg?: any): Collection<K, V>;
		filterArray(fn: (value: V, key: K, collection: Collection<K, V>) => boolean, thisArg?: any): V[];
		find(prop: keyof V, value: any): V;
		find(fn: (value: V, key: K, collection: Collection<K, V>) => boolean): V;
		findAll(prop: keyof V, value: any): V[];
		findKey(prop: keyof V, value: any): K;
		findKey(fn: (value: V, key: K, collection: Collection<K, V>) => boolean): K;
		first(): V;
		firstKey(): K;
		keyArray(): K[];
		last(): V;
		lastKey(): K;
		map<T>(fn: (value: V, key: K, collection: Collection<K, V>) => T, thisArg?: any): T[];
		random(): V;
		randomKey(): K;
		reduce<T>(fn: (accumulator: any, value: V, key: K, collection: Collection<K, V>) => T, initialValue?: any): T;
		some(fn: (value: V, key: K, collection: Collection<K, V>) => boolean, thisArg?: any): boolean;
	}

	export class DMChannel extends TextBasedChannel(Channel) {
		constructor(client: Client, data: object);
		lastMessageID: string;
		messages: Collection<string, Message>;
		recipient: User;
		toString(): string;
	}

	export class Emoji {
		constructor(guild: Guild, data: object);
		client: Client;
		createdAt: Date;
		createdTimestamp: number;
		guild: Guild;
		id: string;
		identifier: string;
		managed: boolean;
		name: string;
		requiresColons: boolean;
		roles: Collection<string, Role>;
		url: string;
		edit(data: EmojiEditData): Promise<Emoji>;
		equals(other: Emoji | object): boolean;
		toString(): string;
	}

	export class Game {
		constructor(data: object);
		name: string;
		streaming: boolean;
		type: number;
		url: string;
		equals(game: Game): boolean;
	}

	export class GroupDMChannel extends TextBasedChannel(Channel) {
		constructor(client: Client, data: object);
		applicationID: string;
		icon: string;
		lastMessageID: string;
		managed: boolean;
		messages: Collection<string, Message>;
		name: string;
		nicks: Collection<string, string>;
		owner: User;
		ownerID: string;
		recipients: Collection<string, User>;
		equals(channel: GroupDMChannel): boolean;
		toString(): string;
	}

	export class Guild {
		constructor(client: Client, data: object);
		afkChannelID: string;
		afkTimeout: number;
		applicationID: string;
		available: boolean;
		channels: Collection<string, GuildChannel>;
		client: Client;
		createdAt: Date;
		createdTimestamp: number;
		defaultChannel: TextChannel;
		embedEnabled: boolean;
		emojis: Collection<string, Emoji>;
		features: object[];
		icon: string;
		iconURL: string;
		id: string;
		joinedAt: Date;
		joinedTimestamp: number;
		large: boolean;
		memberCount: number;
		members: Collection<string, GuildMember>;
		name: string;
		owner: GuildMember;
		ownerID: string;
		presences: Collection<string, Presence>;
		region: string;
		roles: Collection<string, Role>;
		splash: string;
		splashURL: string;
		verificationLevel: number;
		voiceConnection: VoiceConnection;
		acknowledge(): Promise<Guild>;
		addMember(user: UserResolvable, options: AddGuildMemberOptions): Promise<GuildMember>;
		ban(user: UserResolvable, deleteDays?: number): Promise<GuildMember | User | string>;
		createChannel(name: string, type: 'text' | 'voice', overwrites?: PermissionOverwrites[] | object[]): Promise<TextChannel | VoiceChannel>;
		createEmoji(attachment: BufferResolvable | Base64Resolvable, name: string, roles?: Collection<string, Role> | Role[]): Promise<Emoji>;
		createRole(data?: RoleData): Promise<Role>;
		delete(): Promise<Guild>;
		deleteEmoji(emoji: Emoji | string): Promise<void>;
		edit(data: GuildEditData): Promise<Guild>;
		equals(guild: Guild): boolean;
		fetchBans(): Promise<Collection<string, User>>;
		fetchInvites(): Promise<Collection<string, Invite>>;
		fetchMember(user: UserResolvable, cache?: boolean): Promise<GuildMember>;
		fetchMembers(query?: string, limit?: number): Promise<Guild>;
		fetchVoiceRegions(): Promise<Collection<string, VoiceRegion>>;
		fetchWebhooks(): Promise<Collection<string, Webhook>>;
		leave(): Promise<Guild>;
		member(user: UserResolvable): GuildMember;
		pruneMembers(days: number, dry?: boolean): Promise<number>;
		search(options?: MessageSearchOptions): Promise<Message[][]>;
		setAFKChannel(afkChannel: ChannelResovalble): Promise<Guild>;
		setAFKTimeout(afkTimeout: number): Promise<Guild>;
		setChannelPositions(channelPositions: ChannelPosition): Promise<Guild>;
		setIcon(icon: Base64Resolvable): Promise<Guild>;
		setName(name: string): Promise<Guild>;
		setOwner(owner: GuildMemberResolvable): Promise<Guild>;
		setRegion(region: string): Promise<Guild>;
		setRolePosition(role: string | Role, position: number, relative?: boolean): Promise<Guild>;
		setSplash(splash: Base64Resolvable): Promise<Guild>;
		setVerificationLevel(verificationLevel: number): Promise<Guild>;
		sync(): void;
		toString(): string;
		unban(user: UserResolvable): Promise<User>;
	}

	export class GuildChannel extends Channel {
		constructor(guild: Guild, data: object);
		deletable: boolean;
		guild: Guild;
		name: string;
		permissionOverwrites: Collection<string, PermissionOverwrites>;
		position: number;
		clone(name?: string, withPermissions?: boolean, withTopic?: boolean): Promise<GuildChannel>;
		createInvite(options?: InviteOptions): Promise<Invite>;
		edit(data: ChannelData): Promise<GuildChannel>;
		equals(channel: GuildChannel): boolean;
		overwritePermissions(userOrRole: RoleResolvable | UserResolvable, options: PermissionOverwriteOptions): Promise<void>;
		permissionsFor(member: GuildMemberResolvable): Permissions;
		setName(name: string): Promise<GuildChannel>;
		setPosition(position: number): Promise<GuildChannel>;
		setTopic(topic: string): Promise<GuildChannel>;
		toString(): string;
	}

	export class GuildMember extends PartialTextBasedChannel() {
		constructor(guild: Guild, data: object);
		bannable: boolean;
		client: Client;
		colorRole: Role;
		deaf: boolean;
		displayColor: number;
		displayHexColor: string;
		displayName: string;
		guild: Guild;
		highestRole: Role;
		hoistRole: Role;
		id: string;
		joinedAt: Date;
		joinedTimestamp: number;
		kickable: boolean;
		lastMessage: Message;
		lastMessageID: string;
		mute: boolean;
		nickname: string;
		permissions: Permissions;
		presence: Presence;
		roles: Collection<string, Role>;
		selfDeaf: boolean;
		selfMute: boolean;
		serverDeaf: boolean;
		serverMute: boolean;
		speaking: boolean;
		user: User;
		voiceChannel: VoiceChannel;
		voiceChannelID: string;
		voiceSessionID: string;
		addRole(role: Role | string): Promise<GuildMember>;
		addRoles(roles: Collection<string, Role> | Role[] | string[]): Promise<GuildMember>;
		ban(deleteDays?: number): Promise<GuildMember>;
		createDM(): Promise<DMChannel>;
		deleteDM(): Promise<DMChannel>;
		edit(data: object): Promise<GuildMember>;
		hasPermission(permission: PermissionResolvable | PermissionResolvable[], explicit?: boolean, checkAdmin?: boolean, checkOwner?: boolean): boolean;
		hasPermissions(permission: PermissionResolvable[], explicit?: boolean): boolean;
		kick(): Promise<GuildMember>;
		missingPermissions(permissions: PermissionResolvable[], explicit?: boolean): PermissionResolvable[];
		permissionsIn(channel: ChannelResovalble): Permissions;
		removeRole(role: Role | string): Promise<GuildMember>;
		removeRoles(roles: Collection<string, Role> | Role[] | string[]): Promise<GuildMember>;
		setDeaf(deaf: boolean): Promise<GuildMember>;
		setMute(mute: boolean): Promise<GuildMember>;
		setNickname(nickname: string): Promise<GuildMember>;
		setRoles(roles: Collection<string, Role> | Role[] | string[]): Promise<GuildMember>;
		setVoiceChannel(voiceChannel: ChannelResovalble): Promise<GuildMember>;
		toString(): string;
	}

	export class Invite {
		constructor(client: Client, data: object);
		channel: GuildChannel | PartialGuildChannel;
		client: Client;
		code: string;
		createdAt: Date;
		createdTimestamp: number;
		expiresAt: Date;
		expiresTimestamp: number;
		guild: Guild | PartialGuild;
		inviter: User;
		maxAge: number;
		maxUses: number;
		temporary: boolean;
		url: string;
		uses: number;
		delete(): Promise<Invite>;
		toString(): string;
	}

	export class Message {
		constructor(channel: TextChannel | DMChannel | GroupDMChannel, data: object, client: Client);
		attachments: Collection<string, MessageAttachment>;
		author: User;
		channel: TextChannel | DMChannel | GroupDMChannel;
		cleanContent: string;
		client: Client;
		content: string;
		createdAt: Date;
		createdTimestamp: number;
		deletable: boolean;
		editable: boolean;
		editedAt: Date;
		editedTimestamp: number;
		edits: Message[];
		embeds: MessageEmbed[];
		guild: Guild;
		hit: boolean;
		id: string;
		member: GuildMember;
		mentions: {
			users: Collection<string, User>;
			roles: Collection<string, Role>;
			channels: Collection<string, GuildChannel>;
			everyone: boolean;
		};
		nonce: string;
		pinnable: boolean;
		pinned: boolean;
		reactions: Collection<string, MessageReaction>;
		system: boolean;
		tts: boolean;
		type: string;
		webhookID: string;
		acknowledge(): Promise<Message>;
		clearReactions(): Promise<Message>;
		delete(timeout?: number): Promise<Message>;
		edit(content: StringResolvable, options?: MessageEditOptions): Promise<Message>;
		editCode(lang: string, content: StringResolvable): Promise<Message>;
		equals(message: Message, rawData: object): boolean;
		fetchWebhook(): Promise<Webhook>;
		isMemberMentioned(member: GuildMember | User): boolean;
		isMentioned(data: GuildChannel | User | Role | string): boolean;
		pin(): Promise<Message>;
		react(emoji: string | Emoji | ReactionEmoji): Promise<MessageReaction>;
		reply(content?: StringResolvable, options?: MessageOptions): Promise<Message | Message[]>;
		reply(options?: MessageOptions): Promise<Message | Message[]>;
		toString(): string;
		unpin(): Promise<Message>;
	}

	export class MessageAttachment {
		constructor(message: Message, data: object);
		client: Client;
		filename: string;
		filesize: number;
		height: number;
		id: string;
		message: Message;
		proxyURL: string;
		url: string;
		width: number;
	}

	export class MessageCollector extends EventEmitter {
		constructor(channel: Channel, filter: CollectorFilterFunction, options?: CollectorOptions);
		channel: Channel;
		collected: Collection<string, Message>;
		ended: boolean;
		filter: CollectorFilterFunction;
		next: Promise<Message>;
		options: CollectorOptions;
		stop(reason?: string): void;
		on(event: 'end', listener: (collection: Collection<string, Message>, reason: string) => void): this;
		on(event: 'message', listener: (message: Message, collector: MessageCollector) => void): this;
	}

	export class MessageEmbed {
		constructor(message: Message, data: object);
		author: MessageEmbedAuthor;
		client: Client;
		color: number;
		createdAt: Date;
		createdTimestamp: number;
		description: string;
		fields: MessageEmbedField[];
		footer: MessageEmbedFooter;
		hexColor: string;
		message: Message;
		provider: MessageEmbedProvider;
		thumbnail: MessageEmbedThumbnail;
		title: string;
		type: string;
		url: string;
	}

	export class MessageEmbedAuthor {
		constructor(embed: MessageEmbed, data: object);
		embed: MessageEmbed;
		iconURL: string;
		name: string;
		url: string;
	}

	export class MessageEmbedField {
		constructor(embed: MessageEmbed, data: object);
		embed: MessageEmbed;
		inline: boolean;
		name: string;
		value: string;
	}

	export class MessageEmbedFooter {
		constructor(embed: MessageEmbed, data: object);
		embed: MessageEmbed;
		iconURL: string;
		proxyIconURL: string;
		text: string;
	}

	export class MessageEmbedProvider {
		constructor(embed: MessageEmbed, data: object);
		embed: MessageEmbed;
		name: string;
		url: string;
	}

	export class MessageEmbedThumbnail {
		constructor(embed: MessageEmbed, data: object);
		embed: MessageEmbed;
		height: number;
		proxyURL: string;
		url: string;
		width: number;
	}

	export class MessageReaction {
		constructor(message: Message, emoji: object, count: number, me: boolean);
		count: number;
		emoji: Emoji | ReactionEmoji;
		me: boolean;
		message: Message;
		users: Collection<string, User>;
		fetchUsers(limit?: number): Promise<Collection<string, User>>;
		remove(user?: UserResolvable): Promise<MessageReaction>;
	}

	export class OAuth2Application {
		constructor(client: Client, data: object);
		bot: object;
		botPublic: boolean;
		botRequireCodeGrant: boolean;
		client: Client;
		createdAt: Date;
		createdTimestamp: number;
		description: string;
		flags: number;
		icon: string;
		iconURL: string;
		id: string;
		name: string;
		redirectURIs: string[];
		rpcApplicationState: boolean;
		rpcOrigins: string[];
		secret: string;
		reset(): OAuth2Application;
		toString(): string;
	}

	export class PartialGuild {
		constructor(client: Client, data: object);
		client: Client;
		icon: string;
		id: string;
		name: string;
		splash: string;
	}

	export class PartialGuildChannel {
		constructor(client: Client, data: object);
		client: Client;
		id: string;
		name: string;
		type: string;
	}

	export class PermissionOverwrites {
		constructor(guildChannel: GuildChannel, data: object);
		allow: number;
		channel: GuildChannel;
		deny: number;
		id: string;
		type: string;
		delete(): Promise<PermissionOverwrites>;
	}

	export class Permissions {
		constructor(permissions: number | PermissionResolvable[]);
		constructor(member: GuildMember, permissions: number | PermissionResolvable[]);
		bitfield: number;
		member: GuildMember;
		raw: number;
		static ALL: number;
		static DEFAULT: number;
		static FLAGS: PermissionFlags;
		add(...permissions: PermissionResolvable[]): this;
		has(permission: PermissionResolvable | PermissionResolvable[], checkAdmin?: boolean): boolean;
		hasPermission(permission: PermissionResolvable, explicit?: boolean): boolean;
		hasPermissions(permissions: PermissionResolvable[], explicit?: boolean): boolean;
		missing(permissions: PermissionResolvable[], checkAdmin?: boolean): PermissionResolvable[];
		missingPermissions(permissions: PermissionResolvable[], checkAdmin?: boolean): PermissionResolvable[];
		remove(...permissions: PermissionResolvable[]): this;
		serialize(checkAdmin?: boolean): PermissionObject;
		static resolve(permission: PermissionResolvable | PermissionResolvable[]): number;
	}

	export class Presence {
		constructor(data: object);
		game: Game;
		status: 'online' | 'offline' | 'idle' | 'dnd';
		equals(presence: Presence): boolean;
	}

	export class ReactionEmoji {
		constructor(reaction: MessageReaction, name: string, id: string);
		id: string;
		identifier: string;
		name: string;
		reaction: MessageReaction;
		toString(): string;
	}

	class RequestHandler {
		constructor(restManager: {});
		globalLimit: boolean;
		queue: object[];
		restManager: object;
		handle(): void;
		push(request: {}): void;
	}

	export class RichEmbed {
		constructor(data?: RichEmbedOptions);
		author?: { name: string; url?: string; icon_url?: string; };
		color?: number | string;
		description?: string;
		fields?: { name: string; value: string; inline?: boolean; }[];
		file?: string | FileOptions;
		footer?: { text?: string; icon_url?: string; };
		image?: { url: string; proxy_url?: string; height?: number; width?: number; };
		thumbnail?: { url: string; height?: number; width?: number; };
		timestamp?: Date;
		title?: string;
		url?: string;
		addBlankField(inline?: boolean): this;
		addField(name: StringResolvable, value: StringResolvable, inline?: boolean): this;
		attachFile(file: string | FileOptions): this;
		setAuthor(name: StringResolvable, icon?: string, url?: string): this;
		setColor(color: ColorResolvable): this;
		setDescription(description: StringResolvable): this;
		setFooter(text: StringResolvable, icon?: string): this;
		setImage(url: string): this;
		setThumbnail(url: string): this;
		setTimestamp(timestamp?: Date): this;
		setTitle(title: StringResolvable): this;
		setURL(url: string): this;
	}

	export class Role {
		constructor(guild: Guild, data: object);
		calculatedPosition: number;
		client: Client;
		color: number;
		createdAt: Date;
		createdTimestamp: number;
		editable: boolean;
		guild: Guild;
		hexColor: string;
		hoist: boolean;
		id: string;
		managed: boolean;
		members: Collection<string, GuildMember>;
		mentionable: boolean;
		name: string;
		permissions: number;
		position: number;
		comparePositionTo(role: Role): number;
		delete(): Promise<Role>;
		edit(data: RoleData): Promise<Role>;
		equals(role: Role): boolean;
		hasPermission(permission: PermissionResolvable | PermissionResolvable[], explicit?: boolean, checkAdmin?: boolean): boolean;
		hasPermissions(permissions: PermissionResolvable[], explicit?: boolean): boolean;
		serialize(): PermissionObject;
		setColor(color: string | number): Promise<Role>;
		setHoist(hoist: boolean): Promise<Role>;
		setMentionable(mentionable: boolean): Promise<Role>;
		setName(name: string): Promise<Role>;
		setPermissions(permissions: PermissionResolvable[]): Promise<Role>;
		setPosition(position: number, relative?: boolean): Promise<Role>;
		toString(): string;
		static comparePositions(role1: Role, role2: Role): number;
	}

	class SecretKey {
		constructor(key: Uint8Array);
		key: Uint8Array;
	}

	export class Shard {
		constructor(manager: ShardingManager, id: number, args?: string[]);
		env: object;
		id: string;
		manager: ShardingManager;
		process: ChildProcess;
		eval(script: string): Promise<any>;
		fetchClientValue(prop: string): Promise<any>;
		send(message: any): Promise<Shard>;
	}

	export class ShardClientUtil {
		constructor(client: Client);
		count: number;
		id: number;
		broadcastEval(script: string): Promise<any[]>;
		fetchClientValues(prop: string): Promise<any[]>;
		send(message: any): Promise<void>;
		static singleton(client: Client): ShardClientUtil;
	}

	export class ShardingManager extends EventEmitter {
		constructor(file: string, options?: {
			totalShards?: number | 'auto';
			respawn?: boolean;
			shardArgs?: string[];
			token?: string;
		});
		file: string;
		respawn: boolean;
		shardArgs: string[];
		shards: Collection<number, Shard>;
		token: string;
		totalShards: number;
		broadcast(message: any): Promise<Shard[]>;
		broadcastEval(script: string): Promise<any[]>;
		createShard(id: number): Promise<Shard>;
		fetchClientValues(prop: string): Promise<any[]>;
		spawn(amount?: number, delay?: number): Promise<Collection<number, Shard>>;
		on(event: 'launch', listener: (shard: Shard) => void): this;
		on(event: 'message', listener: (shard: Shard, message: any) => void): this;
	}

	export class SnowflakeUtil {
		static deconstruct(snowflake: string): DeconstructedSnowflake;
		static generate(): string;
	}

	export class StreamDispatcher extends VolumeInterface {
		constructor(player: AudioPlayer, stream: NodeJS.ReadableStream, streamOptions: StreamOptions);
		destroyed: boolean;
		passes: number;
		paused: boolean;
		player: AudioPlayer;
		stream: ReadableStream | VoiceBroadcast;
		time: number;
		totalStreamTime: number;
		volume: number;
		end(reason?: string): void;
		pause(): void;
		resume(): void;
	}

	export class TextChannel extends TextBasedChannel(GuildChannel) {
		constructor(guild: Guild, data: object);
		lastMessageID: string;
		members: Collection<string, GuildMember>;
		messages: Collection<string, Message>;
		topic: string;
		createWebhook(name: string, avatar: BufferResolvable): Promise<Webhook>;
		fetchWebhooks(): Promise<Collection<string, Webhook>>;
	}

	export class User extends PartialTextBasedChannel() {
		constructor(client: Client, data: object);
		avatar: string;
		avatarURL: string;
		bot: boolean;
		client: Client;
		createdAt: Date;
		createdTimestamp: number;
		defaultAvatarURL: string;
		discriminator: string;
		displayAvatarURL: string;
		dmChannel: DMChannel;
		id: string;
		lastMessage: Message;
		lastMessageID: string;
		note?: string;
		presence: Presence;
		username: string;
		addFriend(): Promise<User>;
		block(): Promise<User>;
		createDM(): Promise<DMChannel>
		deleteDM(): Promise<DMChannel>;
		equals(user: User): boolean;
		fetchProfile(): Promise<UserProfile>;
		removeFriend(): Promise<User>;
		setNote(note: string): Promise<User>;
		toString(): string;
		typingDurationIn(channel: ChannelResovalble): number;
		typingIn(channel: ChannelResovalble): boolean;
		typingSinceIn(channel: ChannelResovalble): Date;
		unblock(): Promise<User>;
	}

	export class UserConnection {
		constructor(user: User, data: object);
		id: string;
		integrations: object[];
		name: string;
		revoked: boolean;
		type: string;
		user: User;
	}

	export class UserProfile {
		constructor(user: User, data: object);
		client: Client;
		connections: Collection<string, UserConnection>;
		mutualGuilds: Collection<string, Guild>;
		premium: boolean;
		premiumSince: Date;
		user: User;
	}

	export class Util {
		static escapeMarkdown(text: string, onlyCodeBlock?: boolean, onlyInlineCode?: boolean): string;
		static fetchRecommendedShards(token: string, guildsPerShard?: number): Promise<number>;
		static splitMessage(text: string, options?: SplitOptions): string | string[];
	}

	export class VolumeInterface extends EventEmitter {
		constructor(object?: { volume: number })
		setVolume(volume: number): void;
		setVolumeDecibels(db: number): void;
		setVolumeLogarithmic(value: number): void;
		on(event: 'debug', listener: (information: string) => void): this;
		on(event: 'end', listener: (reason: string) => void): this;
		on(event: 'error', listener: (err: Error) => void): this;
		on(event: 'speaking', listener: (value: boolean) => void): this;
		on(event: 'start', listener: () => void): this;
		on(event: 'volumeChange', listener: (oldVolume: number, newVolume: number) => void): this;
	}

	export class VoiceBroadcast extends EventEmitter {
		constructor(client: Client);
		client: Client;
		currentTranscoder: object;
		dispatchers: StreamDispatcher[];
		prism: object;
		destroy(): void;
		end(): void;
		pause(): void;
		playArbitraryInput(input: string, options?: StreamOptions): VoiceBroadcast;
		playConvertedStream(stream: ReadableStream, options?: StreamOptions): VoiceBroadcast;
		playFile(file: string, options?: StreamOptions): StreamDispatcher;
		playOpusStream(stream: ReadableStream, options?: StreamOptions): StreamDispatcher;
		playStream(stream: ReadableStream, options?: StreamOptions): VoiceBroadcast;
		resume(): void;
		on(event: string, listener: Function): this;
		on(event: 'error', listener: (error: Error) => void): this;
		on(event: 'subscribe', listener: (dispatcher: StreamDispatcher) => void): this;
		on(event: 'unsubscribe', listener: (dispatcher: StreamDispatcher) => void): this;
		on(event: 'warn', listener: (warning: string | Error) => void): this;
	}

	export class VoiceChannel extends GuildChannel {
		constructor(guild: Guild, data: object);
		bitrate: number;
		connection: VoiceConnection;
		full: boolean;
		joinable: boolean;
		members: Collection<string, GuildMember>;
		speakable: boolean;
		userLimit: number;
		join(): Promise<VoiceConnection>;
		leave(): void;
		setBitrate(bitrate: number): Promise<VoiceChannel>;
		setUserLimit(userLimit: number): Promise<VoiceChannel>;
	}

	export class VoiceConnection extends EventEmitter {
		constructor(voiceManager: ClientVoiceManager, channel: VoiceChannel);
		channel: VoiceChannel;
		client: Client;
		player: AudioPlayer;
		prism: object;
		receivers: VoiceReceiver[];
		speaking: boolean;
		status: number;
		voiceManager: ClientVoiceManager;
		createReceiver(): VoiceReceiver;
		disconnect(): void;
		playArbitraryInput(input: string, options?: StreamOptions): StreamDispatcher;
		playBroadcast(broadcast: VoiceBroadcast): StreamDispatcher;
		playConvertedStream(stream: ReadableStream, options?: StreamOptions): StreamDispatcher;
		playFile(file: string, options?: StreamOptions): StreamDispatcher;
		playOpusStream(steam: ReadableStream, options?: StreamOptions): StreamDispatcher;
		playStream(stream: ReadableStream, options?: StreamOptions): StreamDispatcher;
		sendVoiceStateUpdate(options: object): void;
		setSessionID(sessionID: string): void;
		setTokenAndEndpoint(token: string, endpoint: string): void;
		on(event: 'authenticated', listener: () => void): this;
		on(event: 'debug', listener: (message: string) => void): this;
		on(event: 'disconnect', listener: (error: Error) => void): this;
		on(event: 'error', listener: (error: Error) => void): this;
		on(event: 'failed', listener: (error: Error) => void): this;
		on(event: 'newSession', listener: () => void): this;
		on(event: 'ready', listener: () => void): this;
		on(event: 'reconnecting', listener: () => void): this;
		on(event: 'speaking', listener: (user: User, speaking: boolean) => void): this;
		on(event: 'warn', listener: (warning: string | Error) => void): this;
	}

	export class VoiceReceiver extends EventEmitter {
		constructor(connection: VoiceConnection);
		destroyed: boolean;
		voiceConnection: VoiceConnection;
		createOpusStream(user: UserResolvable): ReadableStream;
		createPCMStream(user: UserResolvable): ReadableStream;
		destroy(): void;
		recreate(): void;
		on(event: 'opus', listener: (user: User, buffer: Buffer) => void): this;
		on(event: 'pcm', listener: (user: User, buffer: Buffer) => void): this;
		on(event: 'warn', listener: (reason: string, message: string) => void): this;
	}

	export class VoiceRegion {
		constructor(data: object);
		custom: boolean;
		deprecated: boolean;
		id: string;
		name: string;
		optimal: boolean;
		sampleHostname: string;
		vip: boolean;
	}

	export class Webhook {
		constructor(client: Client, dataOrID: object | string, token: string);
		avatar: string;
		channelID: string;
		client: Client;
		guildID: string;
		id: string;
		name: string;
		owner: User | object;
		token: string;
		delete(): Promise<void>;
		edit(name: string, avatar: BufferResolvable): Promise<Webhook>;
		send(content?: StringResolvable, options?: WebhookMessageOptions): Promise<Message | Message[]>;
		send(options?: WebhookMessageOptions): Promise<Message | Message[]>;
		sendCode(lang: string, content: StringResolvable, options?: WebhookMessageOptions): Promise<Message | Message[]>;
		sendFile(attachment: BufferResolvable, name?: string, content?: StringResolvable, options?: WebhookMessageOptions): Promise<Message>;
		sendMessage(content?: StringResolvable, options?: WebhookMessageOptions): Promise<Message | Message[]>;
		sendMessage(options?: WebhookMessageOptions): Promise<Message | Message[]>;
		sendSlackMessage(body: object): Promise<void>;
	}

	export class WebhookClient extends Webhook {
		constructor(id: string, token: string, options?: ClientOptions);
		options: ClientOptions;
		clearInterval(interval: NodeJS.Timer): void;
		clearTimeout(timeout: NodeJS.Timer): void;
		destroy(): void;
		setInterval(fn: Function, delay: number, ...args: any[]): NodeJS.Timer;
		setTimeout(fn: Function, delay: number, ...args: any[]): NodeJS.Timer;
	}

	//#endregion

	//#region Mixins

	// Model the TextBasedChannel mixin system, allowing application of these fields
	// to the classes that use these methods without having to manually add them
	// to each of those classes

	type Constructable<T> = new (...args: any[]) => T;
	const PartialTextBasedChannel: <T>(Base?: Constructable<T>) => Constructable<T & PartialTextBasedChannelFields>;
	const TextBasedChannel: <T>(Base?: Constructable<T>) => Constructable<T & TextBasedChannelFields>;

	type PartialTextBasedChannelFields = {
		send(content?: StringResolvable, options?: MessageOptions): Promise<Message | Message[]>;
		send(options?: MessageOptions): Promise<Message | Message[]>;
		sendCode(lang: string, content: StringResolvable, options?: MessageOptions): Promise<Message | Message[]>;
		sendEmbed(embed: RichEmbed | RichEmbedOptions, content?: string, options?: MessageOptions): Promise<Message>;
		sendEmbed(embed: RichEmbed | RichEmbedOptions, options?: MessageOptions): Promise<Message>;
		sendFile(attachment: BufferResolvable, name?: string, content?: StringResolvable, options?: MessageOptions): Promise<Message>;
		sendMessage(content?: string, options?: MessageOptions): Promise<Message | Message[]>;
		sendMessage(options?: MessageOptions): Promise<Message | Message[]>;
	};

	type TextBasedChannelFields = {
		typing: boolean;
		typingCount: number;
		acknowledge(): Promise<DMChannel | GroupDMChannel | TextChannel>;
		awaitMessages(filter: CollectorFilterFunction, options?: AwaitMessagesOptions): Promise<Collection<string, Message>>;
		bulkDelete(messages: Collection<string, Message> | Message[] | number, filterOld?: boolean): Promise<Collection<string, Message>>;
		createCollector(filter: CollectorFilterFunction, options?: CollectorOptions): MessageCollector;
		fetchMessage(messageID: string): Promise<Message>;
		fetchMessages(options?: ChannelLogsQueryOptions): Promise<Collection<string, Message>>;
		fetchPinnedMessages(): Promise<Collection<string, Message>>;
		search(options?: MessageSearchOptions): Promise<Message[][]>;
		startTyping(count?: number): void;
		stopTyping(force?: boolean): void;
	} & PartialTextBasedChannelFields;

	//#endregion

	//#region Typedefs

	type AddGuildMemberOptions = {
		accessToken: String;
		nick?: string;
		roles?: Collection<string, Role> | Role[] | string[];
		mute?: boolean;
		deaf?: boolean;
	}

	type AwaitMessagesOptions = CollectorOptions & { errors?: string[] };
	type Base64String = string;
	type Base64Resolvable = Buffer | Base64String;
	type BufferResolvable = Buffer | string;

	type ChannelData = {
		name?: string;
		position?: number;
		topic?: string;
		bitrate?: number;
		userLimit?: number;
	};

	type ChannelLogsQueryOptions = {
		limit?: number
		before?: string
		after?: string
		around?: string
	};

	type ChannelPosition = {
		id: string;
		position: number;
	};

	type ChannelResovalble = Channel | Guild | Message | string;

	type ClientOptions = {
		apiRequestMethod?: string;
		shardId?: number;
		shardCount?: number;
		messageCacheMaxSize?: number;
		messageCacheLifetime?: number;
		messageSweepInterval?: number;
		fetchAllMembers?: boolean;
		disableEveryone?: boolean;
		sync?: boolean;
		restWsBridgeTimeout?: number;
		restTimeOffset?: number;
		disabledEvents?: WSEventType[];
		ws?: WebSocketOptions;
	};

	type CollectorFilterFunction = (message?: Message, collector?: MessageCollector) => boolean;
	type CollectorOptions = {
		time?: number;
		max?: number;
		maxMatches?: number;
	};

	type ColorResolvable = ('DEFAULT'
		| 'AQUA'
		| 'GREEN'
		| 'BLUE'
		| 'PURPLE'
		| 'GOLD'
		| 'ORANGE'
		| 'RED'
		| 'GREY'
		| 'DARKER_GREY'
		| 'NAVY'
		| 'DARK_AQUA'
		| 'DARK_GREEN'
		| 'DARK_BLUE'
		| 'DARK_PURPLE'
		| 'DARK_GOLD'
		| 'DARK_ORANGE'
		| 'DARK_RED'
		| 'DARK_GREY'
		| 'LIGHT_GREY'
		| 'DARK_NAVY'
		| 'RANDOM')
		| [number, number, number]
		| number
		| string;

	type DeconstructedSnowflake = {
		date: Date;
		workerID: number;
		processID: number;
		increment: number;
		binary: string;
	};

	type EmojiEditData = {
		name?: string;
		roles?: Collection<string, Role> | Role[] | string[];
	};

	type EmojiIdentifierResolvable = string | Emoji | ReactionEmoji;

	type FileOptions = {
		attachment: BufferResolvable;
		name?: string;
	};

	type GroupDMRecipientOptions = {
		user?: UserResolvable;
		accessToken?: string;
		nick?: string;
	};

	type GuildEditData = {
		name?: string;
		region?: string;
		verificationLevel?: number;
		afkChannel?: ChannelResovalble;
		afkTimeout?: number;
		icon?: Base64Resolvable;
		owner?: GuildMemberResolvable;
		splash?: Base64Resolvable;
	};

	type GuildMemberResolvable = GuildMember | User;
	type GuildResolvable = Guild | string;

	type InviteOptions = {
		temporary?: boolean;
		maxAge?: number;
		maxUses?: number;
	};

	type InviteResolvable = string;
	type MessageEditOptions = { embed: RichEmbedOptions; };

	type MessageOptions = {
		tts?: boolean;
		nonce?: string;
		embed?: RichEmbed | RichEmbedOptions,
		disableEveryone?: boolean;
		file?: FileOptions | string;
		code?: string;
		split?: boolean | SplitOptions;
		reply?: UserResolvable;
	};

	type MessageSearchOptions = {
		content?: string;
		maxID?: string;
		minID?: string;
		has?: 'link'
		| 'embed'
		| 'file'
		| 'video'
		| 'image'
		| 'sound'
		| '-link'
		| '-embed'
		| '-file'
		| '-video'
		| '-image'
		| '-sound';
		channel?: ChannelResovalble;
		author?: UserResolvable;
		authorType?: 'user'
		| 'bot'
		| 'webhook'
		| '-user'
		| '-bot'
		| '-webhook';
		sortBy?: 'relevant' | 'recent';
		sortOrder?: 'asc' | 'desc';
		contextSize?: number;
		limit?: number;
		offset?: number;
		mentions?: UserResolvable;
		mentionsEveryone?: boolean;
		linkHostname?: string;
		embedProvider?: string;
		embedType?: 'image' | 'video' | 'url' | 'rich';
		attachmentFilename?: string;
		attachmentExtension?: string;
		before?: Date;
		after?: Date;
		during?: Date;
	};

	type PermissionFlags = {
		ADMINISTRATOR?: number;
		CREATE_INSTANT_INVITE?: number;
		KICK_MEMBERS?: number;
		BAN_MEMBERS?: number;
		MANAGE_CHANNELS?: number;
		MANAGE_GUILD?: number;
		ADD_REACTIONS?: number;
		READ_MESSAGES?: number;
		SEND_MESSAGES?: number;
		SEND_TTS_MESSAGES?: number;
		MANAGE_MESSAGES?: number;
		EMBED_LINKS?: number;
		ATTACH_FILES?: number;
		READ_MESSAGE_HISTORY?: number;
		MENTION_EVERYONE?: number;
		USE_EXTERNAL_EMOJIS?: number;
		EXTERNAL_EMOJIS?: number;
		CONNECT?: number;
		SPEAK?: number;
		MUTE_MEMBERS?: number;
		DEAFEN_MEMBERS?: number;
		MOVE_MEMBERS?: number;
		USE_VAD?: number;
		CHANGE_NICKNAME?: number;
		MANAGE_NICKNAMES?: number;
		MANAGE_ROLES?: number;
		MANAGE_ROLES_OR_PERMISSIONS?: number;
		MANAGE_WEBHOOKS?: number;
		MANAGE_EMOJIS?: number;
	};

	type PermissionObject = {
		ADMINISTRATOR?: boolean;
		CREATE_INSTANT_INVITE?: boolean;
		KICK_MEMBERS?: boolean;
		BAN_MEMBERS?: boolean;
		MANAGE_CHANNELS?: boolean;
		MANAGE_GUILD?: boolean;
		ADD_REACTIONS?: boolean;
		READ_MESSAGES?: boolean;
		SEND_MESSAGES?: boolean;
		SEND_TTS_MESSAGES?: boolean;
		MANAGE_MESSAGES?: boolean;
		EMBED_LINKS?: boolean;
		ATTACH_FILES?: boolean;
		READ_MESSAGE_HISTORY?: boolean;
		MENTION_EVERYONE?: boolean;
		USE_EXTERNAL_EMOJIS?: boolean;
		EXTERNAL_EMOJIS?: boolean;
		CONNECT?: boolean;
		SPEAK?: boolean;
		MUTE_MEMBERS?: boolean;
		DEAFEN_MEMBERS?: boolean;
		MOVE_MEMBERS?: boolean;
		USE_VAD?: boolean;
		CHANGE_NICKNAME?: boolean;
		MANAGE_NICKNAMES?: boolean;
		MANAGE_ROLES?: boolean;
		MANAGE_ROLES_OR_PERMISSIONS?: boolean;
		MANAGE_WEBHOOKS?: boolean;
		MANAGE_EMOJIS?: boolean;
	};

	type PermissionString = 'ADMINISTRATOR'
		| 'CREATE_INSTANT_INVITE'
		| 'KICK_MEMBERS'
		| 'BAN_MEMBERS'
		| 'MANAGE_CHANNELS'
		| 'MANAGE_GUILD'
		| 'ADD_REACTIONS'
		| 'READ_MESSAGES'
		| 'SEND_MESSAGES'
		| 'SEND_TTS_MESSAGES'
		| 'MANAGE_MESSAGES'
		| 'EMBED_LINKS'
		| 'ATTACH_FILES'
		| 'READ_MESSAGE_HISTORY'
		| 'MENTION_EVERYONE'
		| 'USE_EXTERNAL_EMOJIS'
		| 'EXTERNAL_EMOJIS'
		| 'CONNECT'
		| 'SPEAK'
		| 'MUTE_MEMBERS'
		| 'DEAFEN_MEMBERS'
		| 'MOVE_MEMBERS'
		| 'USE_VAD'
		| 'CHANGE_NICKNAME'
		| 'MANAGE_NICKNAMES'
		| 'MANAGE_ROLES'
		| 'MANAGE_ROLES_OR_PERMISSIONS'
		| 'MANAGE_WEBHOOKS'
		| 'MANAGE_EMOJIS';

	type PermissionOverwriteOptions = PermissionObject;
	type PermissionResolvable = PermissionString | PermissionString[] | number[];

	type PresenceData = {
		status?: PresenceStatus;
		afk?: boolean;
		game?: {
			name?: string;
			url?: string;
		}
	}

	type PresenceStatus = 'online' | 'idle' | 'invisible' | 'dnd';

	type RichEmbedOptions = {
		title?: string;
		description?: string;
		url?: string;
		timestamp?: Date;
		color?: number | string;
		fields?: { name: string; value: string; inline?: boolean; }[];
		file?: string | FileOptions;
		author?: { name: string; url?: string; icon_url?: string; };
		thumbnail?: { url: string; height?: number; width?: number; };
		image?: { url: string; proxy_url?: string; height?: number; width?: number; };
		video?: { url: string; height: number; width: number; };
		footer?: { text?: string; icon_url?: string; };
	};

	type RoleData = {
		name?: string;
		color?: number | string;
		hoist?: boolean;
		position?: number;
		permissions?: PermissionString[];
		mentionable?: boolean;
	};

	type RoleResolvable = Role | string;

	type SplitOptions = {
		maxLength?: number;
		char?: string;
		prepend?: string;
		append?: string;
	};

	type StreamOptions = {
		seek?: number;
		volume?: number;
		passes?: number;
	};

	type StringResolvable = string[] | string | any;
	type UserResolvable = User | string | Message | Guild | GuildMember;

	type WebhookMessageOptions = {
		username?: string;
		avatarURL?: string;
		tts?: boolean;
		nonce?: string;
		embeds?: object[];
		disableEveryone?: boolean;
		file?: FileOptions | string;
		code?: string | boolean;
		split?: boolean | SplitOptions;
	};

	type WebSocketOptions = {
		large_threshold?: number;
		compress?: boolean;
	};

	type WSEventType = 'READY'
		| 'GUILD_SYNC'
		| 'GUILD_CREATE'
		| 'GUILD_DELETE'
		| 'GUILD_UPDATE'
		| 'GUILD_MEMBER_ADD'
		| 'GUILD_MEMBER_REMOVE'
		| 'GUILD_MEMBER_UPDATE'
		| 'GUILD_MEMBERS_CHUNK'
		| 'GUILD_ROLE_CREATE'
		| 'GUILD_ROLE_DELETE'
		| 'GUILD_ROLE_UPDATE'
		| 'GUILD_BAN_ADD'
		| 'GUILD_BAN_REMOVE'
		| 'CHANNEL_CREATE'
		| 'CHANNEL_DELETE'
		| 'CHANNEL_UPDATE'
		| 'CHANNEL_PINS_UPDATE'
		| 'MESSAGE_CREATE'
		| 'MESSAGE_DELETE'
		| 'MESSAGE_UPDATE'
		| 'MESSAGE_DELETE_BULK'
		| 'MESSAGE_REACTION_ADD'
		| 'MESSAGE_REACTION_REMOVE'
		| 'MESSAGE_REACTION_REMOVE_ALL'
		| 'USER_UPDATE'
		| 'USER_NOTE_UPDATE'
		| 'PRESENCE_UPDATE'
		| 'VOICE_STATE_UPDATE'
		| 'TYPING_START'
		| 'VOICE_SERVER_UPDATE'
		| 'RELATIONSHIP_ADD'
		| 'RELATIONSHIP_REMOVE';

	//#endregion
}
