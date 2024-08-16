import { Endpoints } from '@/enum/endpoints';
import { createAxiosInstance } from '@/library/api';
import { Category } from '@/types/category';
import { APIResponse } from '@/types/response';
import { useQuery } from '@tanstack/react-query';

type Props = Partial<{
	id: number;
	limit: number;
}>;

export const useCategoriesFetching = (props: Props) => {
	const query = useQuery<APIResponse<Category[]>>({
		queryKey: ['categories_fetching'],
		queryFn: async () => {
			const api = createAxiosInstance();

			let endpoint = `${Endpoints.CATEGORIES}`;

			if (props) {
				const params = {
					...(props.id && { id: props.id.toString() }),
					...(props.limit && { limit: props.limit.toString() })
				};

				const queryParams = new URLSearchParams(params);
				endpoint += `?${queryParams}`;
			}

			try {
				const response = await api.get(endpoint);
				return response.data;
			} catch (error) {
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				return Promise.reject(new Error(error as any));
			}
		}
	});

	return query;
};
