import { Injectable } from '@angular/core';

import { SidebarChapter } from 'app/sidebar/interfaces/SidebarChapter.interface';

@Injectable()
export class TopicService {
	getTopics() : SidebarChapter[] {
		return [
			{
				title: 'Aggregator',
				items: [
					{
						id: 'aggregator-find',
						title: 'find()'
					}, {
						id: 'aggregator-where',
						title: 'where()'
					}, {
						id: 'aggregator-map',
						title: 'map()'
					}, {
						id: 'aggregator-sort',
						title: 'sort()'
					}, {
						id: 'aggregator-reverse',
						title: 'reverse()'
					}, {
						id: 'aggregator-count',
						title: 'count()'
					}, {
						id: 'aggregator-has',
						title: 'has()'
					}, {
						id: 'aggregator-all',
						title: 'all()'
					}, {
						id: 'aggregator-sum',
						title: 'sum()'
					}, {
						id: 'aggregator-avg',
						title: 'avg()'
					}, {
						id: 'aggregator-removeduplicates',
						title: 'removeDuplicates()'
					}, {
						id: 'aggregator-getcommonelements',
						title: 'getCommonElements()'
					}, {
						id: 'aggregator-group',
						title: 'group()'
					}, {
						id: 'aggregator-toarray',
						title: 'toArray()'
					}, {
						id: 'aggregator-tomap',
						title: 'toMap()'
					}
				]
			}, {
				title: 'Group',
				items: [
					{
						id: 'group-keys',
						title: 'keys()'
					}, {
						id: 'group-values',
						title: 'values()'
					}, {
						id: 'group-get',
						title: 'get()'
					}, {
						id: 'group-set',
						title: 'set()'
					}, {
						id: 'group-toarray',
						title: 'toArray()'
					}, {
						id: 'group-tomap',
						title: 'toMap()'
					}, {
						id: 'group-toaggregator',
						title: 'toAggregator()'
					}
				]
			}, {
				title: 'Matchers',
				items: [
					{
						id: 'matcher-eq',
						title: 'eq()'
					}, {
						id: 'matcher-neq',
						title: 'neq()'
					}, {
						id: 'matcher-gt',
						title: 'gt()'
					}, {
						id: 'matcher-lt',
						title: 'lt()'
					}, {
						id: 'matcher-gte',
						title: 'gte()'
					}, {
						id: 'matcher-lte',
						title: 'lte()'
					}, {
						id: 'matcher-match',
						title: 'match()'
					}, {
						id: 'matcher-isnull',
						title: 'isNull()'
					}, {
						id: 'matcher-not',
						title: 'not()'
					}, {
						id: 'matcher-and',
						title: 'and()'
					}, {
						id: 'matcher-or',
						title: 'or()'
					}, {
						id: 'matcher-all',
						title: 'all()'
					}, {
						id: 'matcher-one',
						title: 'one()'
					}
				]
			}
		];
	}
}
